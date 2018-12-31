"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _reduxDevtools = require("redux-devtools");

var _reduxDevtoolsLogMonitor = _interopRequireDefault(require("redux-devtools-log-monitor"));

var _reduxDevtoolsDockMonitor = _interopRequireDefault(require("redux-devtools-dock-monitor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DevTools = (0, _reduxDevtools.createDevTools)((0, _core.jsx)(_reduxDevtoolsDockMonitor.default, {
  toggleVisibilityKey: "ctrl-h",
  changePositionKey: "ctrl-q"
}, (0, _core.jsx)(_reduxDevtoolsLogMonitor.default, {
  theme: "tomorrow"
})));
var _default = DevTools;
exports.default = _default;
module.exports = exports.default;