const bcrypt = require("bcrypt")

class UserController {
    constructor(userService) {
        this.service = userService
    }

    async getOneById(req, res) {
        const user = await this.service.getOneById(req.params.id)
        res.json(user)
    }

    // ! This should be refactored, and moved to auth
    // async createOne(req, res) {
    //     const user = await this.service.create(req.body)
    //     res.status(201).json({
    //         message: "User created successfully",
    //         user
    //     })
    // }
}

module.exports = UserController