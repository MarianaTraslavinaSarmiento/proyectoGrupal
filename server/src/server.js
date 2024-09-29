const MongooseDB = require("./config/database");
const { PORT } = require("./config/environment");

async function startServer(app) {
    await MongooseDB.connect();
    const server = app.listen(PORT, () => {
        console.log(`Server started on port http://localhost:${PORT}`);
    });

    process.on("SIGINT", () => closeServer(server));
}

async function closeServer(server) {
    await MongooseDB.disconnect();
    server.close();

    console.log("Server closed successfully");
    process.exit(0);
}

module.exports = {startServer};