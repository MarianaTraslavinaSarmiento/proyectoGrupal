const appShop = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")

const ShopController = require("./shop.controller")
const ShopService = require("./shop.service")
const ShopModel = require("./shop.model")

const shopService = new ShopService(ShopModel)
const shopController = new ShopController(shopService)

appShop.get("/", asyncHandler((req, res) => shopController.getAll(req, res)))
appShop.get("/:id", asyncHandler((req, res) => shopController.getOneById(req, res)))
appShop.post("/many", asyncHandler((req, res) => shopController.createMany(req, res)))

module.exports = appShop