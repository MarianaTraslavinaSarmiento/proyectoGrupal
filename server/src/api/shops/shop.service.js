const ShopModel = require("./shop.model")

class ShopService {
    async getAll() {
        return await ShopModel.find()
    }

    async getOneById(id) {
        return await ShopModel.findById(id)
    }
}

module.exports = ShopService