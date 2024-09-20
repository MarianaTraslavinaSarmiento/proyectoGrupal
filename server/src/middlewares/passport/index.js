const passport = require("passport")
const localStrategy = require("./localStrategy")
const UserService = require("../../api/users/user.service")

const userService = new UserService()

passport.use(localStrategy)

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userService.getById(id); 
        done(null, user); 
    } catch (err) {
        done(err);
    }
});

module.exports = passport