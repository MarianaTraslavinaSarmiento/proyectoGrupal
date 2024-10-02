const appPurchase = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")
const PurchaseController = require("./purchase.controller")

const controller = new PurchaseController()

appPurchase.get("/user/:userId", asyncHandler((req, res) => controller.getAllPurchasesByUserId(req, res)))
appPurchase.post("/", asyncHandler((req, res) => controller.registerNewPurchase(req, res)))
appPurchase.post('/confirm-purchase', asyncHandler((req, res) => controller.confirmPurchase(req, res)));

module.exports = appPurchase
