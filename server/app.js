const express = require("express")
const cors = require("cors")
const MongooseDB = require("./src/config/database")
const errorHandler = require("./src/middlewares/errorHandler");
const session = require("express-session");
const passport = require("./src/middlewares/passport")
const cookieParser = require("cookie-parser")

const app = express();
const PORT = 3000

const appShop = require("./src/api/shops/shop.routes");
const appAuth = require("./src/api/auth/auth.routes");

app.use(cookieParser())
app.use(express.json())

app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? process.env.ALLOWED_ORIGIN : 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    credentials: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: process.env.NODE_ENV == "production" ? 2 * 60 * 60 * 1000 : 10 * 1000
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use("/api/shop", appShop)
app.use("/api/auth", appAuth)


app.use(errorHandler)

async function startServer() {
    await MongooseDB.connect()
    const server = app.listen(PORT, () => {
        console.log("Server started on port http://localhost:" + PORT);
    });

    process.on("SIGINT", () => closeServer(server))
}

async function closeServer(server) {
    await MongooseDB.disconnect()
    server.close()

    console.log("Server closed sucessfully");
    process.exit(0)
}

startServer()