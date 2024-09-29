const Redis = require('ioredis');
const { REDIS_URL } = require('./environment');

const redisClient = new Redis(REDIS_URL);

redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.on('connect', () => console.log('\x1b[32m Redis Client Connected \x1b[0m'));

module.exports = redisClient;