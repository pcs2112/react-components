"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTextArea = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("javascript-utils/lib/react");

var _WithFormField = _interopRequireDefault(require("../WithFormField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Library agnostic html TextArea field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @param {Object} WrappedTextAreaComponent
 * @returns {Object} withFormField
 */
var withTextArea = function withTextArea(WrappedFormFieldComponent, WrappedTextAreaComponent) {
  var WithTextArea = function WithTextArea(_ref) {
    var input = _ref.input,
        _ref$htmlAttributes = _ref.htmlAttributes,
        htmlAttributes = _ref$htmlAttributes === void 0 ? {
      rows: 3
    } : _ref$htmlAttributes,
        inputProps = _ref.inputProps,
        placeholder = _ref.placeholder;
    return _react.default.createElement(WrappedTextAreaComponent, _extends({}, htmlAttributes, inputProps, input, {
      placeholder: placeholder
    }));
  };

  WithTextArea.propTypes = {
    input: _propTypes.default.object.isRequired,
    htmlAttributes: _propTypes.default.object,
    inputProps: _propTypes.default.object,
    placeholder: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired
  };
  WithTextArea.displayName = "WithTextArea(".concat((0, _react2.getDisplayName)(WrappedTextAreaComponent), "))");
  return (0, _WithFormField.default)(WrappedFormFieldComponent, WithTextArea);
};

exports.withTextArea = withTextArea;