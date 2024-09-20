const {body, oneOf} = require("express-validator")

const validateLogin = () => {
    return [
        oneOf([
            body('username')
                .notEmpty()
                .withMessage('Either username or email is required')
                .isString()
                .withMessage('The username must be a string'),
            body('email')
                .notEmpty()
                .withMessage('Either username or email is required')
                .isEmail()
                .withMessage('The email must be a valid email')
        ], 'Either username or email must be provided'),
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
        body('genre')
            .notEmpty()
            .withMessage('The genre is required')
            .isString()
            .withMessage('The genre must be a string.')
            .isIn(['M', 'F'])
            .withMessage('The genre must be either M or F'),
        body('born_date')
            .notEmpty()
            .withMessage('The born date is required')
            .isDate()
            .withMessage('The born date must be a date'),
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