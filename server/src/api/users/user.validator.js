const {body} = require("express-validator")

const validateCreateUser = () => {
    return [
        body('username')
            .exists()
            .withMessage('The username is required')
            .isString()
            .withMessage('The username must be a string'),
        body('email')
            .exists()
            .withMessage('The email is required')
            .isEmail()
            .withMessage('The email must be a valid email'),
        body('phone')
            .exists()
            .withMessage('The phone is required')
            .isString()
            .withMessage('The phone must be a string'),
        body('genre')
            .exists()
            .withMessage('The genre is required')
            .isString()
            .withMessage('The genre must be a string (M or F)'),
        body('born_date')
            .exists()
            .withMessage('The born date is required')
            .isDate()
            .withMessage('The born date must be a date'),
        body('password')
            .exists()
            .withMessage('The password is required')
            .isString()
            .withMessage('The password must be a string'),
        body('profile_pic_url')
            .optional()
            .withMessage('The profile pic url is required')
            .isString()
            .withMessage('The profile pic url must be a string'),
        body('type')
            .exists()
            .withMessage('The type is required')
            .isString()
            .withMessage('The type must be a string (client, artisan or support)')
    ]
}

module.exports = {
    validateCreateUser
}