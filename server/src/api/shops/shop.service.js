const { Model } = require("mongoose")

class ShopService {

    /**
     * 
     * @param {Model} shopModel 
     */
    constructor(shopModel) {
        this.model = shopModel
    }

    async getAll() {
        return await this.model.find()
    }

    async getOneById(id) {
        return await this.model.findById(id)
    }

    async insertMany(newShops) {
        return await this.model.insertMany(newShops)
    }    
}

module.exports = ShopService