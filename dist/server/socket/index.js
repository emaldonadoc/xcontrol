"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeSocket = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

const initializeSocket = http => {
  const socket = (0, _socket.default)(http);
  const ws = socket.of('/ws');
  ws.on('connection', connect => {
    console.log('connected');
    connect.on('message', (msg, cb) => {
      console.log('receiving message:', msg);
      cb('here we go to back');
    });
  });
};

exports.initializeSocket = initializeSocket;