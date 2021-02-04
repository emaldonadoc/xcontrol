import io from "socket.io-client";

const socketUrl = 'http://localhost:6660/ws';

const initializeClient = () => {
  const socket = io.connect(socketUrl, {
    forceNew: true
  });

  socket.on('connect', () => {
    console.log('connected');
  });

  socket.on('counting', (count) => {
    console.log('counting - ' + count);
  });
};

initializeClient();


  