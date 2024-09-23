const DiscordStrategy = require('passport-discord').Strategy;
const bcrypt = require('bcrypt');
const UserService = require('../../api/users/user.service');
const UserModel = require('../../api/users/user.model')
const defaultProfilePic = require("../../utils/defaultPfp")

const userService = new UserService()

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET

// {
//     id: '1194669787205341185',
//     username: 'mariana1827',
//     avatar: '0d90264f2f1b7e518817e54243dcffd0',
//     discriminator: '0',
//     public_flags: 0,
//     flags: 0,
//     banner: null,
//     accent_color: null,
//     global_name: 'Mariana Traslaviña Sarmiento',
//     avatar_decoration_data: null,
//     banner_color: null,
//     clan: null,
//     mfa_enabled: false,
//     locale: 'en-US',
//     premium_type: 0,
//     email: 'mariana.traslavina18@gmail.com',
//     verified: true,
//     provider: 'discord',
//     accessToken: '8Qhk9KHJH9XWc3YI99dsBQu26kEJa4',
//     fetchedAt: 2024-09-23T17:58:07.399Z
//   }

module.exports = new DiscordStrategy({
    clientID: DISCORD_CLIENT_ID,
    clientSecret: DISCORD_CLIENT_SECRET,
    callbackURL: '/api/auth/discord/callback',
    scope: ["identify", "email"],

}, async(accessToken, refreshToken, profile, done) => {
    console.log(profile)
    try {
        let user = await userService.getOne({discord_id: profile.id})
        if (user) {
            return done(null, user);
        } else {
            user = new UserModel({
                discord_id: profile.id,    
            });
            await user.save();
            return done(null, user);
        }
    }catch(err){
        return done(err, null)
    }
})