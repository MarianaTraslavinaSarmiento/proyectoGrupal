const PurchaseModel = require("./purchase.model")
const ProductModel = require("../products/product.model")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const { ALLOWED_ORIGIN } = require("../../config/environment");
const VoucherModel = require("../vouchers/voucher.model");

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


    async registerNewPurchase(products, userId, coupon) {
        try {
            let totalAmount = 0;
            let lineItems = [];
            let totalShipping = 0;
    
            // Verificar y aplicar el cupón
            let discountPercentage = 0;
            let validCoupon = null;
            if (coupon && coupon.code) {
                validCoupon = await VoucherModel.findOne({ 
                    code: coupon.code, 
                    user_id: userId,
                    used: false
                });
    
                if (validCoupon) {
                    discountPercentage = validCoupon.discount / 100;
                } else {
                    throw new Error('Cupón inválido o ya utilizado');
                }
            }
            
            for (let product of products) {
                const dbProduct = await ProductModel.findById(product._id);
                if (!dbProduct) {
                    throw new Error(`Producto no encontrado: ${product._id}`);
                }
    
                let price = this.calculateProductPrice(dbProduct, product.quantity);
                let quantity = this.calculateProductQuantity(dbProduct, product.quantity);
    
                let productTotal = price * quantity;
    
                // Añadir gastos de envío si no hay oferta de envío gratis
                if (!(dbProduct.offer && dbProduct.offer.type === 'freeshipping')) {
                    totalShipping += dbProduct.shipping_price * product.quantity;
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
    
            // Aplicar descuento del cupón al total
            let discountAmount = 0;
            if (discountPercentage > 0) {
                discountAmount = totalAmount * discountPercentage;
                totalAmount -= discountAmount;
            }
    
            // Añadir gastos de envío al total
            totalAmount += totalShipping;
    
            // Añadir línea de gastos de envío si es necesario
            if (totalShipping > 0) {
                lineItems.push({
                    price_data: {
                        currency: 'cop',
                        product_data: {
                            name: 'Gastos de envío',
                        },
                        unit_amount: Math.round(totalShipping * 100),
                    },
                    quantity: 1,
                });
            }
    
            // Crear sesión de Stripe
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: lineItems,
                mode: 'payment',
                discounts: discountPercentage > 0 ? [
                    {
                        coupon: await this.createStripeCoupon(discountPercentage),
                    }
                ] : [],
                success_url: `${ALLOWED_ORIGIN}/app/mensaje-de-compra-con-exito?session_id={CHECKOUT_SESSION_ID}`,
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
                amount: Math.round(totalAmount),
                shipping_cost: totalShipping,
                discount_amount: discountAmount,
                stripeSessionId: session.id,
                status: 'pending',
                currency: 'cop',
                coupon_used: validCoupon ? validCoupon.code : null
            });
            
            // Modificar el cupón solo si fue válido
            if (validCoupon) {
                validCoupon.used = true;
                await validCoupon.save();
            }
    
            await purchase.save();
    
            return { purchaseId: purchase._id, sessionId: session.id, sessionUrl: session.url };
        } catch (error) {
            console.error('Error al procesar la compra:', error);
            throw new Error('No se pudo procesar la compra. Por favor, inténtelo de nuevo.');
        }
    }

// Método auxiliar para crear un cupón en Stripe
async createStripeCoupon(discountPercentage) {
    const coupon = await stripe.coupons.create({
        percent_off: discountPercentage * 100,
        duration: 'once',
    });
    return coupon.id;
}

calculateProductPrice(product, quantity) {
    let price = product.price;
    if (product.offer && product.offer.type === 'discount') {
        const discountPercentage = product.offer.details.discount_percentage;
        price = price * (1 - discountPercentage / 100);
    }
    return price;
}

calculateProductQuantity(product, requestedQuantity) {
    if (product.offer && product.offer.type === 'buyxgety') {
        const { buyX, getY } = product.offer.details;
        const sets = Math.floor(requestedQuantity / (buyX + getY));
        const remainder = requestedQuantity % (buyX + getY);
        return (sets * buyX) + Math.min(remainder, buyX);
    }
    return requestedQuantity;
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
