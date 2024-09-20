const ShopModel = require("./shop.model")

class ShopService {
    async getAll() {
        return await ShopModel.find()
    }

    async getOneById(id) {
        return await ShopModel.findById(id)
    }

    async insertMany(newShops) {
        return await ShopModel.insertMany(newShops)
    }    
}

module.exports = ShopService