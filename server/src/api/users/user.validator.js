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
            .isIn(['M', 'F', 'Other'])
            .withMessage('The genre must be either M or F'),
        body('born_date')
            .optional()
            .isDate()
            .withMessage('The born date must be a date'),
    ]
}

const validateAddToFavorites = () => {
    return [
        body('productId')
            .notEmpty()
            .withMessage('The product id is required')
            .isMongoId()
            .withMessage('The product id must be a MongoDB id')
    ]
}

module.exports = {
    validateUpdate,
    validateAddToFavorites
}