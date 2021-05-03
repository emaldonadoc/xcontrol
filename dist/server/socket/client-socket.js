"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _socket = _interopRequireDefault(require("socket.io-client"));

const socketUrl = 'http://192.168.0.24:6660/ws';

const socketPromised = () => new Promise((resolve, reject) => {
  const client = _socket.default.connect(socketUrl, {
    forceNew: true
  });

  client.on('connect', () => {
    console.log('connected');
    resolve(client);
  });
  client.on('connect_failed', () => {
    console.log('Connection Failed');
    reject('Connection Failed');
  });
});

socketPromised().then(socket => {
  socket.emit('message', 'aca andamos', resp => {
    console.log('received', resp);
  });
  socket.on('counting', count => {
    console.log('counting - ' + count);
  });
}).catch(console.error);