const PurchaseModel = require("./purchase.model")
const ProductModel = require("../products/product.model")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const { ALLOWED_ORIGIN } = require("../../config/environment")

class PurchaseService {
    async getAllPurchasesByUserId(userId) {
        const purchases = await PurchaseModel.find({user_id: userId}).populate({
            path: "products.productId",
            model: "Product",
            populate: {
                path: "shop_id",
                model: "Shop",
            }
        });

        return purchases.flatMap(purchase => {
            return purchase.products.map(product => ({
                ...product.productId.toObject(),
                shop: product.productId.shop_id.toObject(),
                quantity: product.quantity,
            }))
        });
    }


    async registerNewPurchase(products, userId) {
        // Verificar y calcular el precio total
        let totalAmount = 0;
        let lineItems = [];

        for (let product of products) {
            // Obtener el producto actual de la base de datos para verificar el precio y las ofertas
            const dbProduct = await ProductModel.findById(product._id);
            if (!dbProduct) {
                throw new Error(`Producto no encontrado: ${product._id}`);
            }

            let price = dbProduct.price;
            let quantity = product.quantity;

            // Aplicar descuentos si existen
            if (dbProduct.offer && dbProduct.offer.type === 'discount') {
                const discountPercentage = dbProduct.offer.details.discount_percentage;
                price = price * (1 - discountPercentage / 100);
            }

            // Manejar oferta "buyxgety"
            if (dbProduct.offer && dbProduct.offer.type === 'buyxgety') {
                const { buyX, getY } = dbProduct.offer.details;
                const sets = Math.floor(quantity / (buyX + getY));
                const remainder = quantity % (buyX + getY);
                quantity = (sets * buyX) + Math.min(remainder, buyX);
            }

            let productTotal = price * quantity;

            // Añadir gastos de envío si no hay oferta de envío gratis
            if (!(dbProduct.offer && dbProduct.offer.type === 'freeshipping')) {
                productTotal += dbProduct.shipping_price * product.quantity;
            }

            totalAmount += productTotal;

            lineItems.push({
                price_data: {
                    currency: 'cop',
                    product_data: {
                        name: dbProduct.name,
                    },
                    unit_amount: Math.round(price * 100), // Stripe espera el precio en centavos
                },
                quantity: quantity,
            });
        }

        // Crear sesión de Stripe
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${ALLOWED_ORIGIN}/app/mensaje-de-compra-con-exito?session_id={CHECKOUT_SESSION_ID}` ,
            cancel_url: `${ALLOWED_ORIGIN}/app/carrito-de-compras`,
        });

        // Crear nuevo registro de compra
        const purchase = new PurchaseModel({
            user_id: userId,
            products: products.map(p => ({
                productId: p._id,
                quantity: p.quantity,
                price: p.price,
                offer: p.offer
            })),
            amount: totalAmount,
            stripeSessionId: session.id,
            currency: 'cop',
            status: 'pending'
        });

        await purchase.save();

        return { purchaseId: purchase._id, sessionId: session.id, sessionUrl: session.url };
    }

    async confirmPurchase(sessionId) {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
            
        if (session.payment_status === 'paid') {
            const purchase = await PurchaseModel.findOne({ stripeSessionId: sessionId });
            
            if (!purchase) {
                throw new Error('Compra no encontrada');
            }

            purchase.status = 'completed';
            await purchase.save();

            return { status: 'success', message: 'Pago confirmado y compra completada' };
        } else {
            return { status: 'error', message: 'El pago no se ha completado' };
        }
    }
}

module.exports = PurchaseService
