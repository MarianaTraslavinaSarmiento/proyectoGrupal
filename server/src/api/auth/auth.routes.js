const appAuth = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")
const AuthController = require("./auth.controller")
const {validateLogin, validateSignup} = require("./auth.validator")
const handleValidationErrors = require("../../middlewares/handleValidationErrors")
const passport = require("../../middlewares/passport")

const controller = new AuthController()

appAuth.post("/login", validateLogin(), handleValidationErrors, passport.authenticate("local"), (req, res) => {
    res.json({ message: "Login successful" })
})
appAuth.post("/signup", validateSignup(), handleValidationErrors, asyncHandler((req, res) => controller.signup(req, res)))
appAuth.get("/logout", asyncHandler((req, res) => controller.logout(req, res)))

appAuth.get("/verify", asyncHandler((req, res) => controller.verify(req, res)))

// * Google
appAuth.get("/google/auth/")
appAuth.get("/google/auth/callback")

// * Discord
appAuth.get("/discord/auth/")
appAuth.get("/discord/auth/callback")

// * Linkedin
appAuth.get("/linkedin/auth/")
appAuth.get("/linkedin/auth/callback")


module.exports = appAuth