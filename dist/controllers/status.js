"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _SOUtils = require("../utils/SOUtils");

const config = {
  path: '/status',
  handler: (req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.write(JSON.stringify({
      deviceLock: (0, _SOUtils.isLock)()
    }));
    res.end();
  }
};
exports.config = config;