"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCyclePagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("javascript-utils/lib/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withCyclePagination = function withCyclePagination(WrappedComponent) {
  var WithCyclePagination = function WithCyclePagination(props) {
    return _react.default.createElement(WrappedComponent, props);
  };

  WithCyclePagination.propTypes = {
    fetchPrev: _propTypes.default.func.isRequired,
    fetchNext: _propTypes.default.func.isRequired,
    prevDisabled: _propTypes.default.bool.isRequired
  };
  WithCyclePagination.displayName = "WithCyclePagination(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return WithCyclePagination;
};

exports.withCyclePagination = withCyclePagination;