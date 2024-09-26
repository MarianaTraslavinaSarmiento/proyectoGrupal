const {body} = require("express-validator")

const validateUpdate = () => {
    return [
        body('username')
            .optional()
            .isString()
            .withMessage('The username must be a string'),
        body('email')
            .optional()
            .isEmail()
            .withMessage('The email must be a valid email'),
        body('genre')
            .optional()
            .isString()
            .withMessage('The genre must be a string.')
            .isIn(['M', 'F'])
            .withMessage('The genre must be either M or F'),
        body('born_date')
            .optional()
            .isDate()
            .withMessage('The born date must be a date'),
    ]
}

module.exports = {
    validateUpdate
}