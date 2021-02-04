import io from "socket.io-client";

const socketUrl = 'ws://localhost:3330';

const initializeClient = () => {
  const socket = io(socketUrl);
  socket.on('connect', (result) => {
    console.log('socket result', result);
  });

  socket.on('counting', (count) => {
    console.log('counting - ' + count);
  });
};

initializeClient();


