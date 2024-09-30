const ProductModel = require("./product.model")

class ProductService {
    async getAll(query) {
        return await ProductModel.find(query)
    }

    async getOneById(id) {
        return await ProductModel.findById(id)
    }

    async getOffers() {
        return await ProductModel.aggregate([
            {
                $match: {
                    offer: { $exists: true }
                }
            },
            {
                $lookup: {
                    from: 'shops', 
                    localField: 'shop_id', 
                    foreignField: '_id', 
                    as: 'shop'
                }
            },
            {
                $unwind: "$shop"
            }
        ]);
    }
}

module.exports = ProductService