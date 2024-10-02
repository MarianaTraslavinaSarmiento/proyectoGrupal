const AuthService = require("./auth.service")
const {Response, Request} = require("express")


class AuthController {
    constructor() {
        this.service = new AuthService()
    }

    async signup(req, res) {
        const {username, email, gender, birth_date, password} = req.body

        const user = await this.service.signup({username, email, gender, birth_date, password})

        res.json({
            message: 'Signup successful',
            user
        })
    }

    async logout(req, res) {
        console.log('Recibida solicitud de logout');
        req.logout((err) => {
            if (err) {
                console.error('Error al cerrar sesión:', err);
                return res.status(500).json({ error: 'Error logging out' });
            }
            req.session.destroy((err) => {
                if (err) {
                    console.error('Error al destruir la sesión:', err);
                    return res.status(500).json({ error: 'Error destroying session' });
                }
                console.log('Sesión destruida exitosamente');
                res.json({ 
                    message: "Logout successful",
                    redirectUrl: "/signup" 
                });
            });
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