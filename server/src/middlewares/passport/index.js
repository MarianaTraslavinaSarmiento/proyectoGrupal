const passport = require("passport")
const localStrategy = require("./localStrategy")
const googleStrategy = require("./googleStrategy")
const discordStrategy = require("./discordStrategy")
const linkedinStrategy = require("./linkedinStrategy")
const UserService = require("../../api/users/user.service")

const userService = new UserService()

passport.use(localStrategy)
passport.use(googleStrategy)
passport.use(discordStrategy)
// ! Linkedin not working properly
// passport.use(linkedinStrategy) 

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userService.getOneById(id); 
        delete user.password
        done(null, user); 
    } catch (err) {
        done(err);
    }
});

module.exports = passport