const socketio = require('socket.io');
const { REDIS_URL } = require('../config/environment');
const Queue = require('bull');

function configureSocketIO(server) {
  const io = socketio(server);

  const redisAdapter = require('socket.io-redis');
  io.adapter(redisAdapter( REDIS_URL ));

  const supportNamespace = io.of('/support');

  supportNamespace.use((socket, next) => {
    if (socket.request.isAuthenticated()) {
      next();
    } else {
      next(new Error('Unauthorized'));
    }
  });

  const messageQueue = new Queue('support-messages', REDIS_URL);

  supportNamespace.on('connection', (socket) => {
    console.log('User connected to support chat');

    socket.on('support-message', (message) => {
      messageQueue.add(message);
      
      supportNamespace.emit('new-message', message);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected from support chat');
    });
  });

  messageQueue.process(async (job) => {
    // Aquí puedes añadir lógica para procesar los mensajes
    // Por ejemplo, guardarlos en la base de datos
    console.log('Processing message:', job.data);
  });

  return io;
}

module.exports = configureSocketIO;