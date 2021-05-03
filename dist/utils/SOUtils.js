"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lock = exports.isLock = exports.isWin = void 0;

var _nodeCmd = _interopRequireDefault(require("node-cmd"));

const isWin = platform => {
  if (platform !== 'win32') {
    throw new ErrorEvent('It can only use windows');
  }
};

exports.isWin = isWin;

const isLock = () => {
  const resultTask = _nodeCmd.default.runSync('tasklist | find "LogonUI.exe"');

  return !!resultTask.data;
};

exports.isLock = isLock;

const lock = () => {
  const commandResult = _nodeCmd.default.runSync("rundll32.exe user32.dll,LockWorkStation");

  console.log({
    commandResult
  });
};

exports.lock = lock;