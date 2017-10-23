'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCheckBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('javascript-utils/lib/react');

var _WithFormField = require('../WithFormField');

var _WithFormField2 = _interopRequireDefault(_WithFormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Library agnostic html checkbox field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @param {Object} WrappedCheckBoxComponent
 * @returns {Object} withFormField
 */
var withCheckBox = exports.withCheckBox = function withCheckBox(WrappedFormFieldComponent, WrappedCheckBoxComponent) {
  var WithCheckBox = function WithCheckBox(_ref) {
    var input = _ref.input,
        _ref$inputProps = _ref.inputProps,
        inputProps = _ref$inputProps === undefined ? {
      readOnly: false,
      fitted: false
    } : _ref$inputProps,
        placeholder = _ref.placeholder;
    return _react2.default.createElement(WrappedCheckBoxComponent, _extends({}, inputProps, {
      type: 'CheckBox'
    }, input, {
      label: placeholder,
      checked: input.checked,
      onChange: function onChange(e, d) {
        input.onChange(d.checked ? 1 : 0);
      },
      onClick: function onClick(e, d) {
        input.onChange(d.checked ? 1 : 0);
      },
      onBlur: function onBlur() {
        input.onBlur();
      }
    }));
  };

  WithCheckBox.propTypes = {
    input: _propTypes2.default.object.isRequired,
    inputProps: _propTypes2.default.object,
    placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired
  };

  WithCheckBox.displayName = 'WithCheckBox(' + (0, _react3.getDisplayName)(WrappedCheckBoxComponent) + '))';

  return (0, _WithFormField2.default)(WrappedFormFieldComponent, WithCheckBox);
};