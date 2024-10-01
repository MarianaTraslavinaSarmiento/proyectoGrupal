const LocalStrategy = require("passport-local").Strategy 
const UserService = require("../../api/users/user.service")
const bcrypt = require("bcrypt")
const userService = new UserService()

module.exports = new LocalStrategy(
    {
        usernameField: 'login',
        passwordField: 'password',
    },
    async (login, password, done) => {
        try {
            const query = login.includes('@') ? { email: login } : { username: login };
            const user = await userService.getOneByQuery(query);

            if (!user) {
                return done(null, false, { message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password )
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
)

