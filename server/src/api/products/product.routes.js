const appProduct = require("express").Router()                
const asyncHandler = require("../../middlewares/asyncHandler")
const ProductController = require("./product.controller")

const controller = new ProductController()

appProduct.get("/", asyncHandler((req, res) => controller.getAll(req, res)))
appProduct.get("/byshop/:shopId", asyncHandler((req, res) => controller.getAllByShopId(req, res)))
appProduct.get("/one/:id", asyncHandler((req, res) => controller.getOneById(req, res)))
appProduct.get("/offers", asyncHandler((req, res) => controller.getOffers(req, res)))

module.exports = appProduct
