module.exports = {
    PORT: 3001,
    NODE_ENV: process.env.NODE_ENV,
    ALLOWED_ORIGIN: process.env.NODE_ENV === 'production' ? process.env.ALLOWED_ORIGIN : 'http://localhost:5173',
    SESSION_SECRET: process.env.SESSION_SECRET,
    SESSION_MAX_AGE: process.env.NODE_ENV == "production" ? 2 * 60 * 60 * 1000 : 30 * 60 * 1000,
};