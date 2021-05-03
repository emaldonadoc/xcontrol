"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _SOUtils = require("../utils/SOUtils");

const config = {
  path: '/status',
  handler: (req, res) => {
    (0, _SOUtils.lock)();
    res.writeHead(204);
    res.end();
  }
};
exports.config = config;