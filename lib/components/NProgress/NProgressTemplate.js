"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _css = require("./css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NProgressTemplate = function NProgressTemplate(_ref) {
  var color = _ref.color;
  return (0, _core.jsx)("div", {
    className: "bar",
    role: "bar" // eslint-disable-line
    ,
    style: _objectSpread({}, _css.barStyles, {
      background: color
    })
  }, (0, _core.jsx)("div", {
    className: "peg",
    style: _objectSpread({}, _css.pegStyles, {
      boxShadow: "0 0 10px ".concat(color, ", 0 0 5px ").concat(color)
    })
  }));
};

NProgressTemplate.propTypes = {
  color: _propTypes.default.string.isRequired
};
var _default = NProgressTemplate;
exports.default = _default;
module.exports = exports.default;