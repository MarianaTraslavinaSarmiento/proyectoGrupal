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
}

module.exports = UserController