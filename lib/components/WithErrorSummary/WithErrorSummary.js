'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withErrorSummary = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('javascript-utils/lib/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withErrorSummary = exports.withErrorSummary = function withErrorSummary(WrappedComponent) {
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

    var error = void 0;
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
      return _react2.default.createElement(WrappedComponent, {
        error: error
      });
    }

    return _react2.default.createElement(WrappedComponent, {
      error: error,
      errorList: normalizedErrors
    });
  };

  WithErrorSummary.propTypes = {
    errors: _propTypes2.default.object
  };

  WithErrorSummary.defaultProps = {
    errors: undefined
  };

  WithErrorSummary.displayName = 'WithErrorSummary(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return WithErrorSummary;
}; /**
    * HOC to display a form's error summary.
    */