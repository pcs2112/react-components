"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withErrorSummary = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("javascript-utils/lib/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * HOC to display a form's error summary.
 */
var withErrorSummary = function withErrorSummary(WrappedComponent) {
  var WithErrorSummary = function WithErrorSummary(_ref) {
    var errors = _ref.errors;

    if (!errors) {
      return null;
    }

    var errKeys = Object.keys(errors);
    var keysLength = errKeys.length;

    if (keysLength < 1) {
      return null;
    }

    var error;
    var normalizedErrors = [];

    for (var i = 0; i < keysLength; i++) {
      var key = errKeys[i];

      if (key === '_error') {
        error = errors[key];
      } else {
        normalizedErrors.push(errors[key]);
      }
    }

    if (normalizedErrors.length < 1) {
      return (0, _core.jsx)(WrappedComponent, {
        error: error
      });
    }

    return (0, _core.jsx)(WrappedComponent, {
      error: error,
      errorList: normalizedErrors
    });
  };

  WithErrorSummary.propTypes = {
    errors: _propTypes.default.object
  };
  WithErrorSummary.defaultProps = {
    errors: undefined
  };
  WithErrorSummary.displayName = "WithErrorSummary(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return WithErrorSummary;
};

exports.withErrorSummary = withErrorSummary;