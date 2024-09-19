const express = require("express")
const cors = require("cors")
const MongooseDB = require("./src/config/database")
const errorHandler = require("./src/middlewares/errorHandler")

const app = express();
const PORT = 3000

app.use(errorHandler)
app.use(express.json())



app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    credentials: true
}));




app.get("/", (req, res) => {
    res.send("Hello World!");
});

async function startServer() {
    await MongooseDB.connect()
    const server = app.listen(PORT, () => {
        console.log("Server started on port http://localhost:" + PORT);
    });

    process.on("SIGINT", () => closeServer(server))
    process.on("SIGTERM", () => closeServer(server))
}

async function closeServer(server) {
    await MongooseDB.disconnect()
    server.close()

    console.log("Server closed sucessfully");
}

startServer()