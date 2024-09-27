const WorkshopService = require("./workshop.service")

class WorkshopController {
    #service

    constructor() {
        this.#service = new WorkshopService()
    }

    async getAll(req, res) {
        const workshops = await this.#service.getAll()
        res.json(workshops)
    }

    async getOneById(req, res) {
        const workshop = await this.#service.getOneById(req.params.id)
        res.json(workshop)
    }
}

module.exports = WorkshopController