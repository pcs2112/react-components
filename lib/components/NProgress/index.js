"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _nprogress = _interopRequireDefault(require("nprogress"));

var _global = _interopRequireDefault(require("css/global"));

var _NProgressTemplate = _interopRequireDefault(require("./NProgressTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enabled = true;

var initialize = function initialize() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  enabled = false;
  var template = (0, _server.renderToString)((0, _core.jsx)(_NProgressTemplate.default, {
    color: _global.default.colors.success
  }));

  _nprogress.default.configure(Object.assign({}, {
    template: template
  }, config));
};

var enable = function enable() {
  enabled = true;
};

var start = function start() {
  if (enabled) {
    _nprogress.default.start();
  }
};

var inc = function inc() {
  if (enabled) {
    _nprogress.default.inc();
  }
};

var done = function done() {
  if (enabled) {
    _nprogress.default.done();
  }
};

var _default = {
  initialize: initialize,
  enable: enable,
  start: start,
  inc: inc,
  done: done
};
exports.default = _default;
module.exports = exports.default;