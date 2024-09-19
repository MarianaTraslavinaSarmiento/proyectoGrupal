const appUser = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")

const UserController = require("./user.controller")
const UserService = require("./user.service")
const UserModel = require("./user.model")

const userService = new UserService(UserModel)
const userController = new UserController(userService)

appUser.get("/", asyncHandler((req, res) => userController.getAll(req, res)))
appUser.get("/:id", asyncHandler((req, res) => userController.getOneById(req, res)))

// ! Just for development
appUser.post("/many", asyncHandler((req, res) => userController.createMany(req, res)))

module.exports = appUser