const DiscordStrategy = require('passport-discord').Strategy;
const bcrypt = require('bcrypt');
const UserService = require('../../api/users/user.service');
const UserModel = require('../../api/users/user.model')

const userService = new UserService()

const DISCORD_APPLICATION_ID = process.env.DISCORD_APPLICATION_ID
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET


module.exports = new DiscordStrategy({
    clientID: DISCORD_APPLICATION_ID,
    clientSecret: DISCORD_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/api/auth/discord/callback',
    scope: ['identify', 'email']

}, async(accessToken, refreshToken, profile, done) => {
    try {
        if (user) {
            return done(null, user);
        } else {
            user = new UserModel({
                discord_id: profile.id,    
                username: profile.username,
                provider: 'discord'
            });
            await user.save();
            return done(null, user);
        }
    }catch(err){
        return done(err, null)
    }
})