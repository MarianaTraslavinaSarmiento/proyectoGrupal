const appUser = require("express").Router()
const asyncHandler = require("../../middlewares/asyncHandler")
const UserController = require("./user.controller")

const controller = new UserController()

appUser.get("/", asyncHandler((req, res) => controller.getOneById(req ,res)))

