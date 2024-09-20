const AuthService = require("./auth.service")
const {Response, Request} = require("express")


class AuthController {
    constructor() {
        this.service = new AuthService()
    }

    async signup(req, res) {
        const {username, email, genre, born_date, password} = req.body
        const user = await this.service.signup({username, email, genre, born_date, password})

        res.json({
            message: 'Signup successful',
            user
        })
    }

    async logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ error: 'Error logging out' });
            }
            res.json({ message: "Logout successful" });
        });  
    }

    async verify(req, res) {
        if (req.isAuthenticated()) {
            res.json({
                authenticated: true
            })
        } else {
            res.json({
                authenticated: false
            })
        }
    }
}

module.exports = AuthController