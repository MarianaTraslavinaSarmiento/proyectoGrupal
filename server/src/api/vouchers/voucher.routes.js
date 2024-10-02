const appVoucher = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")
const VoucherController = require("./voucher.controller")

const controller = new VoucherController()

appVoucher.post("/validate", asyncHandler((req, res) => controller.validateVoucher(req, res)))
appVoucher.get("/", asyncHandler((req, res) => controller.getAllVouchersByUserId(req, res)))

module.exports = appVoucher
