'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFormErrorSummary = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withFormErrorSummary = exports.withFormErrorSummary = function withFormErrorSummary(WrappedComponent) {
  var WithFormErrorSummary = function WithFormErrorSummary(_ref) {
    var errors = _ref.errors;

    if (!errors) {
      return null;
    }

    var errKeys = Object.keys(errors);
    var keysLength = errKeys.length;
    if (keysLength < 1) {
      return null;
    }

    var headerError = void 0;
    var normalizedErrors = [];

    for (var i = 0; i < keysLength; i++) {
      var key = errKeys[i];
      if (key === '_error') {
        headerError = errors[key];
      } else {
        normalizedErrors.push(errors[key]);
      }
    }

    if (normalizedErrors.length < 1) {
      return _react2.default.createElement(WrappedComponent, {
        error: true,
        header: headerError
      });
    }

    return _react2.default.createElement(WrappedComponent, {
      error: true,
      header: headerError,
      list: normalizedErrors
    });
  };

  WithFormErrorSummary.propTypes = {
    error: _propTypes2.default.object
  };

  WithFormErrorSummary.displayName = 'WithFormErrorSummary(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';

  return WithFormErrorSummary;
}; /**
    * HOC to display a form's error summary.
    */