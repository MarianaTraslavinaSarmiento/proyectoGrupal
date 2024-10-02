const appAuth = require("express").Router()                  
const asyncHandler = require("../../middlewares/asyncHandler")
const AuthController = require("./auth.controller")
const {validateLogin, validateSignup} = require("./auth.validator")
const handleValidationErrors = require("../../middlewares/handleValidationErrors")
const passport = require("../../middlewares/passport")

const controller = new AuthController()

const redirects = {
    successRedirect: process.env.ALLOWED_ORIGIN + "app/home",
    failureRedirect: process.env.ALLOWED_ORIGIN + "login"
}

appAuth.post("/login", validateLogin(), handleValidationErrors, passport.authenticate("local"), (req, res) => {
    res.json({ message: "Login successful" })
})
appAuth.post("/signup", validateSignup(), handleValidationErrors, asyncHandler((req, res) => controller.signup(req, res)))
appAuth.get("/logout", asyncHandler((req, res) => controller.logout(req, res)))

appAuth.get("/verify", asyncHandler((req, res) => controller.verify(req, res)))

// * Google
appAuth.get("/google", passport.authenticate("google"))
appAuth.get("/google/callback", passport.authenticate("google", redirects))

// * Discord
appAuth.get("/discord", passport.authenticate("discord"))
appAuth.get("/discord/callback", passport.authenticate("discord", redirects))

// ! Linkedin - not working currently, Linkedin Captcha Error
// appAuth.get("/linkedin", passport.authenticate("linkedin"))
// appAuth.get("/linkedin/callback", passport.authenticate("discord", redirects))


module.exports = appAuth