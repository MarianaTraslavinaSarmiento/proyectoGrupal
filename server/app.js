const express = require("express")
const cors = require("cors")
const http = require("http")

const app = express();

const PORT = 3000

app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    credentials: true
}));


app.get("/", (req, res) => {
    res.send("Hello World!");
});

function startServer() {
    const server = app.listen(PORT, () => {
        console.log("Server started on port http://localhost:" + PORT);
    });

    server.on("SIGINT", () => closeServer(server))
    server.on("SIGTERM", () => closeServer(server))
}

function closeServer(server) {
    server.close()

    console.log("Server closed sucessfully");
}

startServer()