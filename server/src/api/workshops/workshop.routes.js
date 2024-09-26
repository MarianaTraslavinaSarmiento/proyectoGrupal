const appWorkshop = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")
const WorkshopController = require("./workshop.controller")

const controller = new WorkshopController()

appWorkshop.get("/", asyncHandler((req, res) => controller.getAll(req, res)))
appWorkshop.get("/:id", asyncHandler((req, res) => controller.getOneById(req, res)))

module.exports = appWorkshop