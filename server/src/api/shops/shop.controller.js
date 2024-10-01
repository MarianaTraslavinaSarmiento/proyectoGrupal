const ShopService = require("./shop.service")

class ShopController {
    #service

    constructor() {
        this.#service = new ShopService()
    }

    async getAll(req, res) {
        const shops = await this.#service.getAll()
        res.json(shops)
    }

    async getOneById(req, res) {
        const shop = await this.#service.getOneById(req.params.id)
        res.json(shop)
    }
}

module.exports = ShopController