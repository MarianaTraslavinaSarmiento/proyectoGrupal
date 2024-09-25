const appUser = require("express").Router()
const asyncHandler = require("../../middlewares/asyncHandler")
const UserController = require("./user.controller")
const {validateUpdate} = require("./user.validator")
const handleValidationErrors = require("../../middlewares/handleValidationErrors")

const controller = new UserController()

appUser.get("/profile", asyncHandler((req, res) => controller.getOneById(req ,res)))
appUser.put("/update", validateUpdate(), handleValidationErrors, asyncHandler((req, res) => controller.updateUser(req, res)))

module.exports = appUser

