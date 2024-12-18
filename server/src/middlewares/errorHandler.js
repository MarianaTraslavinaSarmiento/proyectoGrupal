function errorHandler(error, req, res, next) {
    const statusCode = error.statusCode || 500
    const message = error.message || 'Internal Server Error'
    console.log(error)
    res.status(statusCode).json({
        error: message
    })
}

module.exports = errorHandler