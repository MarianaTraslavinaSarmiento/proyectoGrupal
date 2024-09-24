const UserModel = require("../users/user.model")
const HttpError = require("../../utils/HttpError")
const bcrypt = require("bcrypt")
const defaultProfilePic = require("../../utils/defaultPfp")


class AuthService {

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

