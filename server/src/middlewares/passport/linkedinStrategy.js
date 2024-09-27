const LinkedinStrategy = require("passport-linkedin-oauth2").Strategy
const bcrypt = require("bcrypt")
const UserService = require("../../api/users/user.service")
const UserModel = require("../../api/users/user.model")
const defaultProfilePic = require("../../utils/defaultPfp")

const userService = new UserService()

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET

module.exports = new LinkedinStrategy({
    clientID: LINKEDIN_CLIENT_ID,
    clientSecret: LINKEDIN_CLIENT_SECRET,
    callbackURL: "/api/auth/linkedin/callback",
    scope: ['profile', 'email']
  }, async(accessToken, refreshToken, profile, done ) => {
    console.log(profile)
    try {
        let user = await userService.getOneByQuery({email: profile.emails[0].value, account_id: profile.id})
        if (user) {
            return done(null, user)
        } else {
            user = new UserModel({
                username: profile.displayName,
                email: profile.emails[0].value,
                profile_pic_url: profile.photos[0].value,
                account_id: profile.id
            })

            await user.save()
            return done(null, user)
        }
    } catch (error) {
        return done(error, null)
    }
})