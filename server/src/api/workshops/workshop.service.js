const WorkshopModel = require("./workshop.model")

class WorkshopService {
    async getAll() {
        return await WorkshopModel.find()
    }

    async getOneById(id) {
        return await WorkshopModel.findById(id)
    }
}

module.exports = WorkshopService