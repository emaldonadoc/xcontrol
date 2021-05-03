"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const controllers = {};

const notFoundHandler = (req, res) => {
  res.writeHead(404, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify({
    message: 'path not found'
  }));
  res.end();
};

const compose = registerPaths => (req, res) => {
  if (registerPaths[req.url]) {
    return registerPaths[req.url].call(void 0, req, res);
  }

  return notFoundHandler.call(void 0, req, res);
};

const Middleware = () => ({
  build: () => {
    return compose(controllers);
  },
  registerController: ({
    path,
    handler
  }) => {
    controllers[path] = handler;
  }
});

var _default = Middleware();

exports.default = _default;