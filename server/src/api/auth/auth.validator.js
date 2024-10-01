const { body } = require("express-validator")

const validateLogin = () => {
    return [
        body("login")
            .notEmpty()
            .withMessage("Username or email are required")
            .isString()
            .withMessage("Username or email must be strings"),
        body('password')
            .notEmpty()
            .withMessage('The password is required')
            .isString()
            .withMessage('The password must be a string')
    ]
}

const validateSignup = () => {
    return [
        body('username')
            .notEmpty()
            .withMessage('The username is required')
            .isString()
            .withMessage('The username must be a string'),
        body('email')
            .notEmpty()
            .withMessage('The email is required')
            .isEmail()
            .withMessage('The email must be a valid email'),
        body('gender')
            .notEmpty()
            .withMessage('The gender is required')
            .isString()
            .withMessage('The gender must be a string.')
            .isIn(['M', 'F', 'Other'])
            .withMessage('The gender must be either M or F'),
        body('birth_date')
            .notEmpty()
            .withMessage('The born date is required')
            .isDate({format: 'DD-MM-YYYY'})
            .withMessage('The born date must be a date (DD-MM-YYYY)'),
        body('password')
            .notEmpty()
            .withMessage('The password is required')
            .isString()
            .withMessage('The password must be a string')
            .isLength({min: 8})
            .withMessage('The password must be at least 8 characters long'),
    ]
}

module.exports = {
    validateLogin,
    validateSignup
}