class UserController {
    constructor(UserService) {
        this.service = UserService
    }

    async getAll(req, res) {
        const users = await this.service.getAll()
        res.json(users)
    }

    async getOneById(req, res) {
        return await this.service.getOneById(req.params.id)
    }
    
    async createMany(req, res) {
        return await this.service.insertMany(req.body)
    }
}

module.exports = UserController