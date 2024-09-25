const ProductModel = require("./product.model")

class ProductService {
    async getAll(query) {
        return await ProductModel.find(query)
    }

    async getOneById(id) {
        return await ProductModel.findById(id)
    }
}

module.exports = ProductService