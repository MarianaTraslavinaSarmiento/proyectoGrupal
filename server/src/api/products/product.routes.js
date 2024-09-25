const appProduct = require("express").Router()                
const asyncHandler = require("../../middlewares/asyncHandler")
const ProductController = require("./product.controller")

const controller = new ProductController()

appProduct.get("/", asyncHandler((req, res) => controller.getAll(req, res)))
appProduct.get("/:id", asyncHandler((req, res) => controller.getOneById(req, res)))

module.exports = appProduct
