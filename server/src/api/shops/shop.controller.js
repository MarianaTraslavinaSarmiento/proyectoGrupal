class ShopController {
    constructor(shopService) {
        this.service = shopService
    }

    async getAll(req, res) {
        const shops = await this.service.getAll()
        res.json(shops)
    }

    async getOneById(req, res) {
        return await this.service.getOneById()
    }

    async createMany(req, res) {
        return await this.service.insertMany(req.body)
    }
}

module.exports = ShopController