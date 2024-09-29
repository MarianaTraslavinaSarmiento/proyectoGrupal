const cors = require("cors");
const express = require("express");
const session = require("express-session");
const RedisStore = require('connect-redis').default;
const redisClient = require('../config/redis');
const passport = require("../middlewares/passport");
const cookieParser = require("cookie-parser");
const { ALLOWED_ORIGIN, SESSION_SECRET, SESSION_MAX_AGE } = require("./environment");

function configureMiddleware(app) {
    const redisStore = new RedisStore({ client: redisClient });

    app.use(cookieParser());
    app.use(express.json());
    app.use(cors({
        origin: ALLOWED_ORIGIN,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
        credentials: true
    }));

    app.use(session({
        store: redisStore,
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: SESSION_MAX_AGE }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = configureMiddleware;