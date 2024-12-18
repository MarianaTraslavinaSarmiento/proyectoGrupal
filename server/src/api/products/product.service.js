const ProductModel = require("./product.model")

class ProductService {
    async getAll(query) {
        return await ProductModel.aggregate([
            {
                $lookup: {
                    from: 'shops',
                    localField: 'shop_id',
                    foreignField: '_id',
                    as: 'shop'
                }
            },
            {
                $unwind: '$shop'
            }
        ])
    }

    async getAllByShopId(shopId) {
        return await ProductModel.find({ shop_id: shopId })
    }

    async getOneById(id) {
        const products = await ProductModel.aggregate([
            {
                $lookup: {
                    from: 'shops',
                    localField: 'shop_id',
                    foreignField: '_id',
                    as: 'shop'
                }
            },
            {
                $unwind: '$shop'
            }
        ])

        return products.find(product => product._id == id)
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