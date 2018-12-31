"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _WithFormError = _interopRequireDefault(require("../../WithFormError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormError = function FormError(_ref) {
  var error = _ref.error;
  return (0, _core.jsx)(_semanticUiReact.Message, {
    error: true,
    header: "Error",
    content: error
  });
};

FormError.propTypes = {
  error: _propTypes.default.string.isRequired
};

var _default = (0, _WithFormError.default)(FormError);

exports.default = _default;
module.exports = exports.default;