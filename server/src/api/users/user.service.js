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

    async subscribeToWorkshop(userId, workshopId) {
        const user = await UserModel.findById(userId);
        if (!user.workshops_subscribed.includes(workshopId)) {
            user.workshops_subscribed.push(workshopId);
            return await user.save();
        }
        return user;
    }

    async unsubscribeFromWorkshop(userId, workshopId) {
        const user = await UserModel.findById(userId);
        user.workshops_subscribed = user.workshops_subscribed.filter(id => id.toString() !== workshopId);
        return await user.save();
    }

    async getSubscribedWorkshops(userId) {
        const user = await UserModel.findById(userId).populate('workshops_subscribed');
        return user.workshops_subscribed;
    }
}

module.exports = UserService