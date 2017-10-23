'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFormError = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('javascript-utils/lib/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withFormError = exports.withFormError = function withFormError(WrappedComponent, defaultError) {
  var WithFormError = function WithFormError(_ref) {
    var error = _ref.error;

    if (!error || error === defaultError) {
      return null;
    }

    return _react2.default.createElement(WrappedComponent, {
      error: error
    });
  };

  WithFormError.propTypes = {
    error: _propTypes2.default.string
  };

  WithFormError.defaultProps = {
    error: undefined
  };

  WithFormError.displayName = 'WithFormError(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return WithFormError;
}; /**
    * HOC to display a form error message.
    */