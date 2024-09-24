const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(401).json({error: "Not Authorized"})
    }
}

module.exports = checkAuth