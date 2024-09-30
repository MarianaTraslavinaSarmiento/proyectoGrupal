const WorkshopModel = require("./workshop.model")

class WorkshopService {
    async getAll(query) {
        return await WorkshopModel.find(query)
    }

    async getAllWithStoreInCharge(search) {
        let query = {};
        return await WorkshopModel.aggregate([
            {
                $lookup: {
                    from: "shops",
                    localField: "store_in_charge",
                    foreignField: "_id",
                    as: "store_in_charge"
                }
            },
            { $match: query }
        ]);
    }

    async getOneById(id) {
        return await WorkshopModel.findById(id)
    }

    async getTrending() {
        return await WorkshopModel.find({ trending: true }, "name image_url")
    }
}

module.exports = WorkshopService