const WorkshopModel = require("./workshop.model")

class WorkshopService {
    async getAll(query) {
        return await WorkshopModel.find(query)
    }

    async getOneById(id) {
        return await WorkshopModel.findById(id)
    }

    async getTrending() {
        return await WorkshopModel.find({ trending: true }, "name image_url")
    }
}

module.exports = WorkshopService