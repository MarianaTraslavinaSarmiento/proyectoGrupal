const appUser = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")

const UserController = require("./user.controller")
const UserService = require("./user.service")
const UserModel = require("./user.model")
const { validateCreateUser } = require("./user.validator")

const userService = new UserService(UserModel)
const userController = new UserController(userService)

// ! This should extract the user id from the session
appUser.get("/:id", asyncHandler((req, res) => userController.getOneById(req, res)))

module.exports = appUser