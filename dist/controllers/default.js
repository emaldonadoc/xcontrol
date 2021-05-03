"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
const config = {
  path: '/',
  handler: (req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.write(JSON.stringify({
      message: 'hello word'
    }));
    res.end();
  }
};
exports.config = config;