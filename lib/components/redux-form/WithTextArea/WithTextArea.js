'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTextArea = undefined;

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
 * Library agnostic html TextArea field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @param {Object} WrappedTextAreaComponent
 * @returns {Object} withFormField
 */
var withTextArea = exports.withTextArea = function withTextArea(WrappedFormFieldComponent, WrappedTextAreaComponent) {
  var WithTextArea = function WithTextArea(_ref) {
    var input = _ref.input,
        _ref$htmlAttributes = _ref.htmlAttributes,
        htmlAttributes = _ref$htmlAttributes === undefined ? { rows: 3 } : _ref$htmlAttributes,
        inputProps = _ref.inputProps,
        placeholder = _ref.placeholder;

    return _react2.default.createElement(WrappedTextAreaComponent, _extends({}, htmlAttributes, inputProps, input, {
      placeholder: placeholder
    }));
  };

  WithTextArea.propTypes = {
    input: _propTypes2.default.object.isRequired,
    htmlAttributes: _propTypes2.default.object,
    inputProps: _propTypes2.default.object,
    placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired
  };

  WithTextArea.displayName = 'WithTextArea(' + (0, _react3.getDisplayName)(WrappedTextAreaComponent) + '))';

  return (0, _WithFormField2.default)(WrappedFormFieldComponent, WithTextArea);
};