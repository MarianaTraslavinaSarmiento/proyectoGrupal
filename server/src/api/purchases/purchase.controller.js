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
        const { products } = req.body;
        const userId = req.user._id; 

        const purchaseResult = await this.#service.registerNewPurchase(products, userId);

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
