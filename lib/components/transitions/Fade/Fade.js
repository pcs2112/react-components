'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitionStyles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

var Fade = function Fade(_ref) {
  var inProp = _ref.in,
      children = _ref.children,
      duration = _ref.duration;

  var normalizedDuration = typeof duration !== 'number' ? duration : 300;
  console.log(inProp);
  return _react2.default.createElement(
    _Transition2.default,
    { 'in': inProp, timeout: normalizedDuration },
    function (state) {
      return _react2.default.createElement(
        'div',
        { style: _extends({
            opacity: 0,
            transition: 'opacity ' + normalizedDuration + 'ms ease-in-out'
          }, transitionStyles[state]) },
        children
      );
    }
  );
};

Fade.propTypes = {
  inProp: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  duration: _propTypes2.default.number
};

exports.default = Fade;
module.exports = exports['default'];