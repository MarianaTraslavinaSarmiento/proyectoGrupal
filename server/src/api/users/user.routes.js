const appUser = require("express").Router()
const asyncHandler = require("../../middlewares/asyncHandler")
const UserController = require("./user.controller")
const {validateUpdate, validateAddToFavorites} = require("./user.validator")
const handleValidationErrors = require("../../middlewares/handleValidationErrors")
const update = require("../../services/multer")


const controller = new UserController()

// Profile
appUser.get("/profile", asyncHandler((req, res) => controller.getOneById(req ,res)))
appUser.put("/update", validateUpdate(), handleValidationErrors, update.single("profile_pic"), asyncHandler((req, res) => controller.updateUser(req, res)))

// Favorites
appUser.post("/add-to-favorites", validateAddToFavorites(), handleValidationErrors, asyncHandler((req, res) => controller.addProductToFavorites(req, res)))
appUser.get("/favorites", asyncHandler((req, res) => controller.getFavorites(req, res)))
appUser.delete("/delete-favorites", asyncHandler((req, res) => controller.deleteFavoriteProduct(req, res)))


// Workshops
appUser.post("/subscribe-workshop", asyncHandler((req, res) => controller.subscribeToWorkshop(req, res)))
appUser.post("/unsubscribe-workshop", asyncHandler((req, res) => controller.unsubscribeFromWorkshop(req, res)));
appUser.get("/subscribed-workshops", asyncHandler((req, res) => controller.getSubscribedWorkshops(req, res)))

module.exports = appUser