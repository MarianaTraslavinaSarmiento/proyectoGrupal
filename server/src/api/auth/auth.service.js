const UserModel = require("../users/user.model")
const HttpError = require("../../utils/HttpError")
const bcrypt = require("bcrypt")

const defaultProfilePic = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg"

class AuthService {
    /**
    * @param {UserModel} user 
    */
    async login({username, email, password}) {
        let user;
        if (username) {
            user = await UserModel.findOne({username})
        } else if (email) {
            user = await UserModel.findOne({email})
        }

        if(!user) throw new HttpError(401, 'User not found')

        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch) throw new HttpError(401, 'Password is incorrect')

        return user.id
    }

    /**
     * @param {UserModel} user 
     */
    async signup(user) {
        console.log(user)
        user.profile_pic_url = defaultProfilePic

        let usernameAlreadyExits = await UserModel.findOne({username: user.username});
        if(usernameAlreadyExits) throw new HttpError(409,'This username is already registered, try logging in.')
        let emailAlreadyExits = await UserModel.findOne({email: user.email});
        if(emailAlreadyExits) throw new HttpError(409,'This email is already registered, try logging in.')

        const newUser = new UserModel(user)



        newUser.password = await bcrypt.hash(user.password, 10)

        // TODO: send email verification

        return await newUser.save()
    }

}

module.exports = AuthService

