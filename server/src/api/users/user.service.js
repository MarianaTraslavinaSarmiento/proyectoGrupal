const { Model } = require("mongoose")
const HttpError = require("../../utils/HttpError")

class UserService {
    /**
     * 
     * @param {Model} userModel 
     */
    constructor(userModel) {
        this.model = userModel
    }

    async getOneById(id) {
        return await this.model.findById(id)
    }


    // ! This should be refactored, and moved to auth
    // async create(newUser) {
    //     const existingUser = await this.model.findOne({ email: newUser.email })
    //     if (existingUser) {
    //         throw new HttpError(400, "This email is already registered, try to log in.")
    //     }

    //     const existingUsername = await this.model.findOne({ username: newUser.username })
    //     if (existingUsername) {
    //         throw new HttpError(400, "This username is already registered, try to log in.")
    //     }

    //     const hashedPassword = await bcrypt.hash(newUser.password, 10)

    //     newUser.password = hashedPassword
    //     newUser.born_date = new Date(newUser.born_date)

    //     return await this.model.create(newUser)
    // }
}

module.exports = UserService