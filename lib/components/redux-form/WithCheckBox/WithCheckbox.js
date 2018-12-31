"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCheckBox = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("javascript-utils/lib/react");

var _WithFormField = _interopRequireDefault(require("../WithFormField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Library agnostic html checkbox field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @param {Object} WrappedCheckBoxComponent
 * @returns {Object} withFormField
 */
var withCheckBox = function withCheckBox(WrappedFormFieldComponent, WrappedCheckBoxComponent) {
  var WithCheckBox = function WithCheckBox(_ref) {
    var input = _ref.input,
        _ref$inputProps = _ref.inputProps,
        inputProps = _ref$inputProps === void 0 ? {
      readOnly: false,
      fitted: false
    } : _ref$inputProps,
        placeholder = _ref.placeholder;
    return (0, _core.jsx)(WrappedCheckBoxComponent, _extends({}, inputProps, {
      type: "CheckBox"
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
    input: _propTypes.default.object.isRequired,
    inputProps: _propTypes.default.object,
    placeholder: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired
  };
  WithCheckBox.displayName = "WithCheckBox(".concat((0, _react2.getDisplayName)(WrappedCheckBoxComponent), "))");
  return (0, _WithFormField.default)(WrappedFormFieldComponent, WithCheckBox);
};

exports.withCheckBox = withCheckBox;