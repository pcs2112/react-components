"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withInput = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("javascript-utils/lib/react");

var _WithFormField = _interopRequireDefault(require("../WithFormField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Library agnostic html input field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @param {Object} WrappedInputComponent
 * @returns {Object} withFormField
 */
var withInput = function withInput(WrappedFormFieldComponent, WrappedInputComponent) {
  var WithInput = function WithInput(_ref) {
    var input = _ref.input,
        type = _ref.type,
        htmlAttributes = _ref.htmlAttributes,
        inputProps = _ref.inputProps,
        placeholder = _ref.placeholder;

    if (type === 'hidden') {
      return (0, _core.jsx)(WrappedInputComponent, _extends({}, htmlAttributes, inputProps, {
        type: "hidden"
      }, input));
    }

    return (0, _core.jsx)(WrappedInputComponent, _extends({}, htmlAttributes, inputProps, {
      type: type
    }, input, {
      placeholder: placeholder
    }));
  };

  WithInput.propTypes = {
    input: _propTypes.default.object.isRequired,
    type: _propTypes.default.oneOf(['color', 'date', 'datetime-local', 'month', 'text', 'tel', 'password', 'email', 'number', 'range', 'search', 'time', 'url', 'week', 'hidden']).isRequired,
    htmlAttributes: _propTypes.default.object,
    inputProps: _propTypes.default.object,
    placeholder: _propTypes.default.string
  };
  WithInput.displayName = "WithInput(".concat((0, _react2.getDisplayName)(WrappedInputComponent), "))");
  return (0, _WithFormField.default)(WrappedFormFieldComponent, WithInput);
};

exports.withInput = withInput;