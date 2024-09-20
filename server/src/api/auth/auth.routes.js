const appAuth = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")
const AuthController = require("./auth.controller")
const {validateLogin, validateSignup} = require("./auth.validator")
const handleValidationErrors = require("../../middlewares/handleValidationErrors")

const controller = new AuthController()

appAuth.get("/", (req, res) => res.json({message: "Test endpoint auth"}))
appAuth.post("/login", validateLogin(), handleValidationErrors, asyncHandler((req, res) => controller.login(req, res)))
appAuth.post("/signup", validateSignup(), handleValidationErrors, asyncHandler((req, res) => controller.signup(req, res)))
appAuth.get("/logout", asyncHandler((req, res) => controller.logout(req, res)))

// * Google
appAuth.get("/google/auth/login")
appAuth.get("/google/auth/login/cb")
appAuth.get("/google/auth/signup")
appAuth.get("/google/auth/signup/cb")

// * Discord
appAuth.get("/discord/auth/login")
appAuth.get("/discord/auth/login/cb")
appAuth.get("/discord/auth/signup")
appAuth.get("/discord/auth/signup/cb")

// * Facebook
appAuth.get("/facebook/auth/login")
appAuth.get("/facebook/auth/login/cb")
appAuth.get("/facebook/auth/signup")
appAuth.get("/facebook/auth/signup/cb")

// * Instagram
appAuth.get("/instagram/auth/login")
appAuth.get("/instagram/auth/login/cb")
appAuth.get("/instagram/auth/signup")
appAuth.get("/instagram/auth/signup/cb")


module.exports = appAuth