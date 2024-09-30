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


module.exports = appUser

