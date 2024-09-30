const socketio = require('socket.io');
const passport = require('passport');
const { createAdapter } = require('@socket.io/redis-adapter');
const redisClient = require('../config/redis');

const API_KEY = process.env.API_KEY || 'tu_clave_api_secreta';

function configureSocketIO(server, app) {
  const io = socketio(server);

  // Configurar Redis para Socket.IO
  const pubClient = redisClient.duplicate();
  const subClient = redisClient.duplicate();
  io.adapter(createAdapter(pubClient, subClient));

  // Obtener el middleware de sesión de Express
  const sessionMiddleware = app._router.stack.find(layer => layer.name === 'session').handle;

  // Middleware personalizado para Socket.IO que integra Passport
  const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

  // Almacenar sesiones activas
  const activeSessions = new Map();

  // Configurar namespaces
  const namespaces = {
    store: io.of('/store'),
    support: io.of('/support')
  };

  
  Object.entries(namespaces).forEach(([name, namespace]) => {
    namespace.use((socket, next) => {
      const { apiKey } = socket.handshake.auth;
      
      if (apiKey === API_KEY) {
        // CLI connection
        socket.isAdmin = true;
        next();
      } else {
        // Web client connection
        wrap(sessionMiddleware)(socket, () => {
          wrap(passport.initialize())(socket, () => {
            wrap(passport.session())(socket, () => {
              if (socket.request.isAuthenticated()) {
                next();
              } else {
                next(new Error('Unauthorized'));
              }
            });
          });
        });
      }
    });

    namespace.on('connection', (socket) => {
      let user;
      if (socket.isAdmin) {
        user = { username: 'Admin' };
      } else {
        user = socket.request.user;
      }
      
      const sessionId = socket.id;
      console.log(`User connected to ${name} chat:`, user.username);

      // Agregar sesión activa
      activeSessions.set(sessionId, {
        id: sessionId,
        username: user.username,
        chatType: name,
        connectedAt: new Date()
      });

      // Emitir lista actualizada de sesiones activas
      io.emit('activeSessions', Array.from(activeSessions.values()));

      socket.on('message', (messageData) => {
        console.log(`Received ${name} message:`, messageData);
        
        try {
          const fullMessage = {
            user: user.username,
            message: messageData.message,
            timestamp: new Date()
          };

          if (messageData.sessionId) {
            namespace.to(messageData.sessionId).emit('message', fullMessage);
          } else {
            console.log('full message', fullMessage);
            namespace.emit('message', fullMessage);
          }

          socket.emit('message-received', { status: 'success', message: 'Mensaje recibido y enviado correctamente' });
        } catch (error) {
          console.error(`Error processing ${name} message:`, error);
          socket.emit('message-error', 'Error al procesar el mensaje');
        }
      });

      socket.on('disconnect', () => {
        console.log(`User disconnected from ${name} chat:`, user.username);
        activeSessions.delete(sessionId);
        io.emit('activeSessions', Array.from(activeSessions.values()));
      });
    });
  });

  // Manejar solicitudes de sesiones activas
  namespaces.store.on('connection', (socket) => {
    socket.on('getActiveSessions', () => {
      socket.emit('activeSessions', Array.from(activeSessions.values()));
    });
  });

  return io;
}

module.exports = configureSocketIO;