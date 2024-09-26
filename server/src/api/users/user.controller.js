const UserService = require("./user.service")

class UserController {
    #service

    constructor() {
        this.#service = new UserService()
    }

    async getOneById(req, res) {
        const user = req.user
        res.json({
            ...user
        })
    }

    async updateUser(req, res) {
        const updatedUser = req.body
        const user = await this.#service.updateUserById(req.user.id, updatedUser)

        res.json({
            message: "User information updated sucessfully",
            newUser: user
        })
    }

    async addProductToFavorites(req, res) {
        const { productId } = req.body
        const user = await this.#service.addProductToFavorites(req.user.id, productId)
        res.json({
            message: "Product added to favorites",
            user
        })
    }

    async getFavorites(req, res) {
        const favorites = await this.#service.getFavorites(req.user.id)
        res.json(favorites)
    }
}

module.exports = UserController