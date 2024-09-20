const appAuth = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")
const AuthController = require("./auth.controller")
const {validateLogin, validateSignup} = require("./auth.validator")
const handleValidationErrors = require("../../middlewares/handleValidationErrors")
const passport = require("../../middlewares/passport")

const controller = new AuthController()

const redirects = {
    failureRedirect: process.env.NODE_ENV === 'production' ? process.env.ALLOWED_ORIGIN + "/login" : 'http://localhost:5173/login',
    sucessRedirect: process.env.NODE_ENV === 'production' ? process.env.ALLOWED_ORIGIN + "/signup" : 'http://localhost:5173/signup',
}

appAuth.post("/login", validateLogin(), handleValidationErrors, passport.authenticate("local", redirects))
appAuth.post("/signup", validateSignup(), handleValidationErrors, asyncHandler((req, res) => controller.signup(req, res)))
appAuth.get("/logout", asyncHandler((req, res) => controller.logout(req, res)))

appAuth.get("/verify", asyncHandler((req, res) => controller.verify(req, res)))

// * Google
appAuth.get("/google/auth/")
appAuth.get("/google/auth/callback")

// * Discord
appAuth.get("/discord/auth/")
appAuth.get("/discord/auth/callback")


// * Facebook
appAuth.get("/facebook/auth/")
appAuth.get("/facebook/auth/callback")

// * Instagram
appAuth.get("/instagram/auth/")
appAuth.get("/instagram/auth/callback")

module.exports = appAuth