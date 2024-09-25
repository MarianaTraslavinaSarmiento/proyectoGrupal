const ProductService = require("./product.service")

class ProductController {
    #service;
    
    constructor() {
        this.#service = new ProductService()
    }

    async getAll(req, res) {
        const query = req.query || {}
        const products = await this.#service.getAll(query)
        res.json(products)
    } 

    async getOneById(req, res) {
        const id = req.params.id
        const product = await this.#service.getOneById(id)
        res.json(product)
    }
}

module.exports = ProductController