const WorkshopService = require("./workshop.service")

class WorkshopController {
    #service

    constructor() {
        this.#service = new WorkshopService()
    }

    async getAll(req, res) {
        const query = req.query || {}
        const workshops = await this.#service.getAll(query)
        res.json(workshops)
    }

    async getAllWithStoreInCharge(req, res) {
        const workshops = await this.#service.getAllWithStoreInCharge()
        res.json(workshops)
    }

    async getOneById(req, res) {
        const workshop = await this.#service.getOneById(req.params.id)
        res.json(workshop)
    }

    async getTrending(req, res) {
        const workshops = await this.#service.getTrending()
        res.json(workshops)
    }
}

module.exports = WorkshopController