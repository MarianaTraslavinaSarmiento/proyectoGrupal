// server.js
const http = require('http');
const app = require('./app.express');
const configureSocketIO = require('./src/services/socketio');
const MongooseDB = require('./src/config/database');
const redisClient = require('./src/config/redis');
const { PORT } = require('./src/config/environment');

async function startServer() {
  try {
    console.log('\x1b[34m Starting the server... \x1b[0m');

    console.log('\x1b[33m Connecting to MongoDB... \x1b[0m');
    await MongooseDB.connect();
    console.log('\x1b[32m MongoDB connected successfully \x1b[0m');

    console.log('\x1b[34m Creating HTTP server... \x1b[0m');
    const server = http.createServer(app);
    console.info('\x1b[32m HTTP server created \x1b[0m');

    console.log('\x1b[34m Configuring Socket.IO... \x1b[0m');
    configureSocketIO(server);
    console.info('\x1b[32m Socket.IO configured \x1b[0m');

    server.listen(PORT, () => {
      console.info(`\x1b[44mServer started on port http://localhost:${PORT} \x1b[0m`);
    });

    const shutdown = async (signal) => {
      console.info(`Received ${signal}. Starting graceful shutdown...`); 
      server.close(async () => {
        console.info('HTTP server closed.');
        await MongooseDB.disconnect();
        await redisClient.quit();
        console.info('Database and Redis connections closed.');
        process.exit(0);
      });

      setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

console.info('Server configuration complete, starting...');
startServer();