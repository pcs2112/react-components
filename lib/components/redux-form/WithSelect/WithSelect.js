"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSelect = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WithFormField = _interopRequireDefault(require("../WithFormField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Library agnostic html select field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @returns {Object} withFormField
 */
var withSelect = function withSelect(WrappedFormFieldComponent) {
  var WithSelect = function WithSelect(_ref) {
    var input = _ref.input,
        options = _ref.options,
        _ref$optionLabelProp = _ref.optionLabelProp,
        optionLabelProp = _ref$optionLabelProp === void 0 ? 'name' : _ref$optionLabelProp,
        _ref$optionValueProp = _ref.optionValueProp,
        optionValueProp = _ref$optionValueProp === void 0 ? 'id' : _ref$optionValueProp,
        optionsPrompt = _ref.optionsPrompt,
        htmlAttributes = _ref.htmlAttributes,
        inputProps = _ref.inputProps;
    return (0, _core.jsx)("select", _extends({}, htmlAttributes, inputProps, input), (0, _core.jsx)("option", {
      value: ""
    }, optionsPrompt), options.map(function (option) {
      return (0, _core.jsx)("option", {
        key: option[optionValueProp],
        value: option[optionValueProp]
      }, option[optionLabelProp]);
    }));
  };

  WithSelect.propTypes = {
    input: _propTypes.default.object.isRequired,
    options: _propTypes.default.array.isRequired,
    optionLabelProp: _propTypes.default.string.isRequired,
    optionValueProp: _propTypes.default.string.isRequired,
    optionsPrompt: _propTypes.default.string.isRequired,
    htmlAttributes: _propTypes.default.object,
    inputProps: _propTypes.default.object
  };
  WithSelect.displayName = 'WithSelect(select)';
  return (0, _WithFormField.default)(WrappedFormFieldComponent, WithSelect);
};

exports.withSelect = withSelect;