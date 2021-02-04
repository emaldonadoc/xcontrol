import io from 'socket.io';

export const initializeSocket = (http) => {
  const socket = io(http);

  socket.of('/ws').on('connection', (socket) => {
    console.log('connected');
    let counter = 0;
    setInterval(() => {
      socket.emit('counting', ++counter);
    }, 1000);
  });
}

