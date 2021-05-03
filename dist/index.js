"use strict";

var _server = require("./server");

var _socket = require("./server/socket");

console.log('initialize control application');
(0, _server.startServer)();
(0, _socket.initializeSocket)();