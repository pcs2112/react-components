"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyle = {
  opacity: 0
};
var transitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
};

var Fade = function Fade(_ref) {
  var inProp = _ref.in,
      children = _ref.children,
      duration = _ref.duration;
  return _react.default.createElement(_Transition.default, {
    in: inProp,
    timeout: duration
  }, function (state) {
    return _react.default.createElement("div", {
      style: _objectSpread({}, defaultStyle, {
        transition: "opacity ".concat(duration, "ms ease-in-out")
      }, transitionStyles[state])
    }, children);
  });
};

Fade.propTypes = {
  in: _propTypes.default.bool.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]).isRequired,
  duration: _propTypes.default.number
};
Fade.defaultProps = {
  duration: 300
};
var _default = Fade;
exports.default = _default;
module.exports = exports.default;