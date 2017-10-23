'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSelect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WithFormField = require('../WithFormField');

var _WithFormField2 = _interopRequireDefault(_WithFormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Library agnostic html select field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @returns {Object} withFormField
 */
var withSelect = exports.withSelect = function withSelect(WrappedFormFieldComponent) {
  var WithSelect = function WithSelect(_ref) {
    var input = _ref.input,
        options = _ref.options,
        _ref$optionLabelProp = _ref.optionLabelProp,
        optionLabelProp = _ref$optionLabelProp === undefined ? 'name' : _ref$optionLabelProp,
        _ref$optionValueProp = _ref.optionValueProp,
        optionValueProp = _ref$optionValueProp === undefined ? 'id' : _ref$optionValueProp,
        optionsPrompt = _ref.optionsPrompt,
        htmlAttributes = _ref.htmlAttributes,
        inputProps = _ref.inputProps;
    return _react2.default.createElement(
      'select',
      _extends({}, htmlAttributes, inputProps, input),
      _react2.default.createElement(
        'option',
        { value: '' },
        optionsPrompt
      ),
      options.map(function (option) {
        return _react2.default.createElement(
          'option',
          {
            key: option[optionValueProp],
            value: option[optionValueProp]
          },
          option[optionLabelProp]
        );
      })
    );
  };

  WithSelect.propTypes = {
    input: _propTypes2.default.object.isRequired,
    options: _propTypes2.default.array.isRequired,
    optionLabelProp: _propTypes2.default.string.isRequired,
    optionValueProp: _propTypes2.default.string.isRequired,
    optionsPrompt: _propTypes2.default.string.isRequired,
    htmlAttributes: _propTypes2.default.object,
    inputProps: _propTypes2.default.object
  };

  WithSelect.displayName = 'WithSelect(select)';

  return (0, _WithFormField2.default)(WrappedFormFieldComponent, WithSelect);
};