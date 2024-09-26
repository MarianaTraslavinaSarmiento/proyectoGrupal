const UserModel = require("./user.model")

class UserService {
    async getOneByQuery(query = {}) {
        return await UserModel.findOne(query)
    }


    async getOneById(id) {
        return await UserModel.findById(id)
    }

    async updateUserById(id, updatedUser) {
        return await UserModel.findByIdAndUpdate(id, updatedUser, {new: true})
    }

    async addProductToFavorites(userId, productId) {
        const user = await UserModel.findById(userId)
        user.favorites.push(productId)
        return await user.save()
    }

    async getFavorites(userId) {
        const user = await UserModel.aggregate([
            {
              $match: {
                _id: userId
              }
            },
            {
              $lookup: {
                from: "products",
                localField: "favorites",
                foreignField: "_id",
                as: "favorites"
              }
            },
            {
              $project: {
                favorites: 1
              }
            }
          ])
        return user.favorites
    }
}

module.exports = UserService