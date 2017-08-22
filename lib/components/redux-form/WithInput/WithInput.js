'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../../utils');

var _WithFormField = require('../WithFormField');

var _WithFormField2 = _interopRequireDefault(_WithFormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Library agnostic html input field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @param {Object} WrappedInputComponent
 * @returns {Object} withFormField
 */
var withInput = exports.withInput = function withInput(WrappedFormFieldComponent, WrappedInputComponent) {
  var WithInput = function WithInput(_ref) {
    var input = _ref.input,
        type = _ref.type,
        htmlAttributes = _ref.htmlAttributes,
        inputProps = _ref.inputProps,
        placeholder = _ref.placeholder;

    if (type === 'hidden') {
      return _react2.default.createElement(WrappedInputComponent, _extends({}, htmlAttributes, inputProps, {
        type: 'hidden'
      }, input));
    }

    return _react2.default.createElement(WrappedInputComponent, _extends({}, htmlAttributes, inputProps, {
      type: type
    }, input, {
      placeholder: placeholder
    }));
  };

  WithInput.propTypes = {
    input: _propTypes2.default.object.isRequired,
    type: _propTypes2.default.oneOf(['color', 'date', 'datetime-local', 'month', 'text', 'tel', 'password', 'email', 'number', 'range', 'search', 'time', 'url', 'week', 'hidden']).isRequired,
    htmlAttributes: _propTypes2.default.object,
    inputProps: _propTypes2.default.object,
    placeholder: _propTypes2.default.string
  };

  WithInput.displayName = 'WithInput(' + (0, _utils.getDisplayName)(WrappedInputComponent) + '))';

  return (0, _WithFormField2.default)(WrappedFormFieldComponent, WithInput);
};