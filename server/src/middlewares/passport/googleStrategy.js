const GoogleStrategy = require("passport-google-oauth20").Strategy
const bcrypt = require("bcrypt")
const UserService = require("../../api/users/user.service")
const UserModel = require("../../api/users/user.model")
const defaultProfilePic = require("../../utils/defaultPfp")

const userService = new UserService()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

// {
//     id: '118265993970559349529',
//     displayName: 'Samuel Suarez',
//     name: { familyName: 'Suarez', givenName: 'Samuel' },
//     emails: [ { value: 'samuel.suarezgm@gmail.com', verified: true } ],
//     photos: [
//       {
//         value: 'https://lh3.googleusercontent.com/a/ACg8ocIusFOap7Ra1ThvmPXGrwT5hPRTm4wZ8LGy3m5LOsRwHoWy9vnw=s96-c'
//       }
//     ],
//     provider: 'google',
//     _raw: '{\n' +
//       '  "sub": "118265993970559349529",\n' +
//       '  "name": "Samuel Suarez",\n' +
//       '  "given_name": "Samuel",\n' +
//       '  "family_name": "Suarez",\n' +
//       '  "picture": "https://lh3.googleusercontent.com/a/ACg8ocIusFOap7Ra1ThvmPXGrwT5hPRTm4wZ8LGy3m5LOsRwHoWy9vnw\\u003ds96-c",\n' +
//       '  "email": "samuel.suarezgm@gmail.com",\n' +
//       '  "email_verified": true\n' +
//       '}',
//     _json: {
//       sub: '118265993970559349529',
//       name: 'Samuel Suarez',
//       given_name: 'Samuel',
//       family_name: 'Suarez',
//       picture: 'https://lh3.googleusercontent.com/a/ACg8ocIusFOap7Ra1ThvmPXGrwT5hPRTm4wZ8LGy3m5LOsRwHoWy9vnw=s96-c',
//       email: 'samuel.suarezgm@gmail.com',
//       email_verified: true
//     }
//   }


module.exports = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback",
    scope: ["profile", "email"]
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
                profile_pic_url: profile.photos[0].value || defaultProfilePic,
                account_id: profile.id
            })

            await user.save()
            return done(null, user)
        }
    } catch (error) {
        return done(error, null)
    }
})