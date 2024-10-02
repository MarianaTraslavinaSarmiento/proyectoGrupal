const PurchaseService = require("./purchase.service")

class PurchaseController {
    #service;
    
    constructor() {
        this.#service = new PurchaseService()
    }

    async getAllPurchasesByUserId(req, res) {
        const purchases = await this.#service.getAllPurchasesByUserId(req.user._id)
        res.status(200).json(purchases)
    }

    async registerNewPurchase(req, res) {
        const { products, coupon } = req.body;
        const userId = req.user._id; 

        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ message: 'Se requiere un array de productos válido' });
        }

        const purchaseResult = await this.#service.registerNewPurchase(products, userId, coupon);

        res.status(200).json({
            message: 'Compra registrada exitosamente',
            purchaseId: purchaseResult.purchaseId,
            sessionId: purchaseResult.sessionId,
            sessionUrl: purchaseResult.sessionUrl
        });
    }

    async confirmPurchase(req, res) {
        const { sessionId } = req.body;
            
        if (!sessionId) {
            return res.status(400).json({ message: 'Se requiere el ID de sesión de Stripe' });
        }

        const result = await this.#service.confirmPurchase(sessionId);
        res.status(200).json(result);
    }
}

module.exports = PurchaseController
