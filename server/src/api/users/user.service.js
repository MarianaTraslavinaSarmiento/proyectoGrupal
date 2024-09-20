const UserModel = require("./user.model")

class UserService {
    async getOne(query = {}) {
        return await UserModel.findOne(query)
    }

    async getOneById(id) {
        return await UserModel.findById(id)
    }
}

module.exports = UserService