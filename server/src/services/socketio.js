const socketio = require('socket.io');
const passport = require('../middlewares/passport');
const redisAdapter = require('socket.io-redis');
const { REDIS_URL, ALLOWED_ORIGIN } = require('../config/environment');

function configureSocketIO(server, sessionMiddleware) {
    const io = socketio(server, {
        cors: {
            origin: ALLOWED_ORIGIN,
            methods: ['GET', 'POST'],
            credentials: true
        },
        allowEIO3: true
    });

    io.adapter(redisAdapter(REDIS_URL));

    const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

    io.use(wrap(sessionMiddleware));
    io.use(wrap(passport.initialize()));
    io.use(wrap(passport.session()));

    io.use((socket, next) => {
        if (socket.request.user) {
            console.log('User authenticated:', socket.request.user);
            next();
        } else {
            console.log('User not authenticated');
            throw new Error('Authentication error');
        }
    });

    const supportNamespace = io.of('/support');

    supportNamespace.on('connection', (socket) => {
        console.log('User connected to support chat:', socket.request);

        socket.on('support-message', (message) => {
            supportNamespace.emit('new-message', {
                user: socket.request.user ? socket.request.user.username : 'Unknown',
                message: message
            });
        });

        socket.on('sendMessage', (message) => {
          console.log('Received message from client:', message);
          
          // Aquí puedes procesar el mensaje como sea necesario
          // Por ejemplo, guardarlo en la base de datos

          // Emitir el mensaje a todos los clientes conectados al namespace de soporte
          supportNamespace.emit('new-message', {
              user: socket.request.user ? socket.request.user.username : 'Unknown',
              message: message
          });
      });

        socket.on('disconnect', () => {
            console.log('User disconnected from support chat:', socket.request.user ? socket.request.user.username : 'Unknown');
        });
    });

    return io;
}

module.exports = configureSocketIO;