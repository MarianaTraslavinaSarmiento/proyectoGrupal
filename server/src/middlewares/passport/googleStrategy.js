const GoogleStrategy = require("passport-google-oauth20").Strategy
const bcrypt = require("bcrypt")
const UserService = require("../../api/users/user.service")
const UserModel = require("../../api/users/user.model")

const userService = new UserService()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

module.exports = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/auth/callback",
    scope: ["profile", "email"]
  }, async(accessToken, refreshToken, profile, done ) => {
    try {
        let user = await userService.getOne()
        if (user) {
            return done(null, user)
        } else {
            user = new UserModel({})

            // await user.save()
            return done(null, user)
        }
    } catch (error) {
        return done(error, null)
    }
})