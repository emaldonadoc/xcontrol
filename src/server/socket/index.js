import io from 'socket.io';

export const initializeSocket = (http) => {
  const socket = io(http);

  const ws = socket.of('/ws')

  ws.on('connection', (connect) => {
    console.log('connected');
    connect.on('message', (msg, cb) => {
      console.log('receiving message:', msg);
      cb('here we go to back');
    })
  });

}

