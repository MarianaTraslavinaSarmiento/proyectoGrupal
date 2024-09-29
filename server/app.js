const express = require("express");
const configureMiddleware = require("./src/config/configureMiddleware");
const configureRoutes = require("./src/config/configureRoutes");
const errorHandler = require("./src/middlewares/errorHandler");
const {startServer} = require("./src/server");

const app = express();

configureMiddleware(app);
configureRoutes(app);
app.use(errorHandler);

startServer(app);

module.exports = app;