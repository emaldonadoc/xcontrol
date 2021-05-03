"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startServer = void 0;

var _http = _interopRequireDefault(require("http"));

var _socket = require("./socket");

var _middleware = _interopRequireDefault(require("./middleware"));

var _controllers = _interopRequireDefault(require("../controllers"));

const port = 6660;
const host = '0.0.0.0';

const registerControllers = () => {
  for (let name in _controllers.default) {
    console.log('Registering path', name);

    _middleware.default.registerController(_controllers.default[name].config);
  }

  return _http.default.createServer(_middleware.default.build());
};

const startServer = () => {
  const server = registerControllers();
  (0, _socket.initializeSocket)(server);
  server.listen(port, host, () => {
    console.log(`Server running at  http://${host}:${port}`);
  });
};

exports.startServer = startServer;