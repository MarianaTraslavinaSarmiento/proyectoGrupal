const express = require("express");
const configureMiddleware = require("./src/config/configureMiddleware");
const configureRoutes = require("./src/config/configureRoutes");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();

configureMiddleware(app);
configureRoutes(app);
app.use(errorHandler);

module.exports = app;