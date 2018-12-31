"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFormError = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("javascript-utils/lib/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * HOC to display a form error message.
 */
var withFormError = function withFormError(WrappedComponent) {
  var WithFormError = function WithFormError(_ref) {
    var error = _ref.error,
        defaultError = _ref.defaultError;

    if (!error || error === defaultError) {
      return null;
    }

    return (0, _core.jsx)(WrappedComponent, {
      error: error
    });
  };

  WithFormError.propTypes = {
    error: _propTypes.default.string,
    defaultError: _propTypes.default.string.isRequired
  };
  WithFormError.defaultProps = {
    error: undefined
  };
  WithFormError.displayName = "WithFormError(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return WithFormError;
};

exports.withFormError = withFormError;