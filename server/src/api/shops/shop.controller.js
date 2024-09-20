const ShopService = require("./shop.service")

class ShopController {
    constructor() {
        this.service = new ShopService()
    }

    async getAll(req, res) {
        const shops = await this.service.getAll()
        res.json(shops)
    }

    async getOneById(req, res) {
        const shop = await this.service.getOneById(req.params.id)
        res.json(shop)
    }

    async createMany(req, res) {
        const result = await this.service.insertMany(req.body)
        res.json(result)
    }
}

module.exports = ShopController