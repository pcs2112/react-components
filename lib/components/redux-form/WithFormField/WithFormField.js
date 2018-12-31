"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFormField = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("javascript-utils/lib/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Returns the field's placeholder value.
 *
 * @param {String} label
 * @param {String} placeholder
 * @returns {String}
 */
var getPlaceholder = function getPlaceholder(label, placeholder) {
  return !placeholder ? label : placeholder;
};
/**
 * Library agnostic HOC to wrap input components.
 * @param {Object} WrappedComponent
 * @param {Object} WrappedInputComponent
 *
 * @returns {Object} WithFormField
 */


var withFormField = function withFormField(WrappedComponent, WrappedInputComponent) {
  var WithFormField = function WithFormField(_ref) {
    var label = _ref.label,
        placeholder = _ref.placeholder,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error,
        fieldProps = _ref.fieldProps,
        fieldErrorTextClassName = _ref.fieldErrorTextClassName,
        props = _objectWithoutProperties(_ref, ["label", "placeholder", "meta", "fieldProps", "fieldErrorTextClassName"]);

    var hasError = touched && typeof error === 'string';
    return (0, _core.jsx)(WrappedComponent, _extends({}, fieldProps, {
      error: hasError
    }), label && (0, _core.jsx)("label", null, label) // eslint-disable-line
    , (0, _core.jsx)(WrappedInputComponent, _extends({}, props, {
      placeholder: getPlaceholder(label, placeholder)
    })), hasError && (0, _core.jsx)("div", {
      className: fieldErrorTextClassName
    }, error));
  };

  WithFormField.propTypes = {
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node, _propTypes.default.element]),
    placeholder: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node, _propTypes.default.element]),
    meta: _propTypes.default.object.isRequired,
    fieldProps: _propTypes.default.object,
    fieldErrorTextClassName: _propTypes.default.string
  };
  WithFormField.displayName = "WithFormField(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return WithFormField;
};

exports.withFormField = withFormField;