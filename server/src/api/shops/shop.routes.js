const appShop = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")
const ShopController = require("./shop.controller")

const controller = new ShopController()

appShop.get("/", asyncHandler((req, res) => controller.getAll(req, res)))
appShop.get("/:id", asyncHandler((req, res) => controller.getOneById(req, res)))

// ! Just for development
appShop.post("/many", asyncHandler((req, res) => controller.createMany(req, res)))

module.exports = appShop