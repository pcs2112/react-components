"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionsFieldProps = exports.fieldProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputProps = {
  checked: _propTypes.default.bool,
  name: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onDrop: _propTypes.default.func,
  onDragStart: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  value: _propTypes.default.any
};
var fieldProps = {
  input: _propTypes.default.shape(inputProps),
  meta: _propTypes.default.shape({
    error: _propTypes.default.any,
    touched: _propTypes.default.bool
  }),
  required: _propTypes.default.bool,
  width: _propTypes.default.string,
  label: _propTypes.default.string,
  inline: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool
};
exports.fieldProps = fieldProps;

var optionsFieldProps = _objectSpread({}, fieldProps, {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    value: _propTypes.default.number
  }))
});

exports.optionsFieldProps = optionsFieldProps;