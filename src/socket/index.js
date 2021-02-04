import io from 'socket.io';

const port = 3330;

//TODO connect with httpserver

export const initializeSocket = () => {
  const server = io(port);

  server.on('connection', (socket) => {
    console.log('connected');
    let counter = 0;
    setInterval(() => {
      socket.emit('counting', ++counter);
    }, 1000);
  });
}

