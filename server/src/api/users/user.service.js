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
}

module.exports = UserService