const UserService = require("./user.service")

class UserController {
    #service

    constructor() {
        this.#service = new UserService()
    }

    async getOneById(req, res) {
        const user = req.user
        res.json(user)
    }

    async updateUser(req, res) {
        const updatedUser = req.body
        const user = await this.#service.updateUserById(req.user._id, updatedUser)

        res.json({
            message: "User information updated successfully",
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

    async subscribeToWorkshop(req, res) {
        const { workshopId } = req.body;
        const user = await this.#service.subscribeToWorkshop(req.user.id, workshopId);
        res.json({
            message: "Subscribed to workshop successfully",
            user
        });
    }

    async unsubscribeFromWorkshop(req, res) {
        try {
            const { workshopId } = req.body;
            const userId = req.user.id; 
            const user = await this.#service.unsubscribeFromWorkshop(userId, workshopId);
            res.json({
                message: "Unsubscribed from workshop successfully",
                user
            });
        } catch (error) {
            console.error('Error in unsubscribeFromWorkshop:', error);
            res.status(500).json({ message: "Error al desinscribirse del taller", error: error.message });
        }
    }

    async getSubscribedWorkshops(req, res) {
        const workshops = await this.#service.getSubscribedWorkshops(req.user.id);
        res.json(workshops);
    }
}

module.exports = UserController