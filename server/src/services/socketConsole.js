const { select, input } = require('@inquirer/prompts');
const { io } = require('socket.io-client');

class SocketConsole {
  constructor(serverUrl, apiKey) {
    this.serverUrl = serverUrl;
    this.apiKey = apiKey;
    this.sockets = {
      store: null,
      support: null
    };
    this.activeSessions = new Map();
  }

  async start() {
    console.log('Iniciando consola de Socket.IO...');
    await this.connectToServer();
    await this.showMainMenu();
  }

  async connectToServer() {
    for (const namespace of ['store', 'support']) {
      this.sockets[namespace] = io(`${this.serverUrl}/${namespace}`, {
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        auth: {
          apiKey: this.apiKey
        }
      });

      this.sockets[namespace].on('connect', () => {
        console.log(`Conectado al namespace ${namespace}`);
      });

      this.sockets[namespace].on('connect_error', (error) => {
        console.error(`Error de conexión en ${namespace}:`, error.message);
      });

      this.sockets[namespace].on('disconnect', (reason) => {
        console.log(`Desconectado del namespace ${namespace}:`, reason);
      });

      // Esperar a que la conexión se establezca
      await new Promise((resolve) => {
        if (this.sockets[namespace].connected) {
          resolve();
        } else {
          this.sockets[namespace].once('connect', resolve);
        }
      });
    }

    // Configurar listener para sesiones activas en el namespace 'store'
    this.sockets.store.on('activeSessions', (sessions) => {
      this.updateActiveSessions(sessions);
    });
  }

  updateActiveSessions(sessions) {
    this.activeSessions.clear();
    sessions.forEach(session => {
      this.activeSessions.set(session.id, session);
    });
  }

  async showMainMenu() {
    while (true) {
      const action = await select({
        message: '¿Qué deseas hacer?',
        choices: [
          { value: 'viewSessions', name: 'Ver sesiones activas' },
          { value: 'sendSupportMessage', name: 'Enviar mensaje a chat de soporte' },
          { value: 'sendStoreMessage', name: 'Enviar mensaje a chat de tienda' },
          { value: 'exit', name: 'Salir' }
        ]
      });

      switch (action) {
        case 'viewSessions':
          await this.showActiveSessions();
          break;
        case 'sendSupportMessage':
          await this.sendMessage('support');
          break;
        case 'sendStoreMessage':
          await this.sendMessage('store');
          break;
        case 'exit':
          await this.disconnectAll();
          return;
      }
    }
  }

  async showActiveSessions() {
    console.log('Obteniendo sesiones activas...');
    this.sockets.store.emit('getActiveSessions');

    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Timeout al obtener sesiones activas'));
      }, 5000);

      this.sockets.store.once('activeSessions', (sessions) => {
        clearTimeout(timeout);
        console.log('Sesiones activas:');
        if (sessions.length === 0) {
          console.log('No hay sesiones activas en este momento.');
        } else {
          sessions.forEach(session => {
            console.log(`- ID: ${session.id}`);
            console.log(`  Usuario: ${session.username}`);
            console.log(`  Tipo de chat: ${session.chatType}`);
            console.log(`  Conectado desde: ${new Date(session.connectedAt).toLocaleString()}`);
            console.log('');
          });
        }
        resolve();
      });
    }).catch(error => {
      console.error('Error al obtener sesiones activas:', error.message);
    });
  }

  async sendMessage(chatType) {
    const sessionId = await input({ message: 'Ingresa el ID de la sesión (deja en blanco para enviar a todos):' });
    const messageText = await input({ message: `Escribe tu mensaje para el chat de ${chatType}:` });

    const messageData = {
      message: messageText,
      sessionId: sessionId || null
    };

    console.log(`Enviando mensaje al chat de ${chatType}...`);
    this.sockets[chatType].emit('message', messageData);

    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Timeout al esperar confirmación del mensaje'));
      }, 5000);

      this.sockets[chatType].once('message-received', (response) => {
        clearTimeout(timeout);
        console.log('Confirmación del servidor:', response);
        resolve();
      });

      this.sockets[chatType].once('message-error', (error) => {
        clearTimeout(timeout);
        console.error('Error al enviar mensaje:', error);
        reject(new Error(error));
      });
    }).catch(error => {
      console.error('Error al enviar mensaje:', error.message);
    });

    console.log('Operación de envío de mensaje completada.');
  }

  async disconnectAll() {
    for (const namespace in this.sockets) {
      if (this.sockets[namespace]) {
        this.sockets[namespace].disconnect();
      }
    }
    console.log('Desconectado de todos los namespaces.');
  }
}



module.exports = SocketConsole;