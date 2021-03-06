"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _react2 = require("javascript-utils/lib/react");

var _utils = require("javascript-utils/lib/utils");

var _FormError = _interopRequireDefault(require("../FormError"));

var _InlineMessage = _interopRequireDefault(require("../../InlineMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var withBasicForm = function withBasicForm(WrappedComponent, defaultError) {
  var WithBasicForm = function WithBasicForm(_ref) {
    var submitting = _ref.submitting,
        pristine = _ref.pristine,
        submitSucceeded = _ref.submitSucceeded,
        error = _ref.error,
        handleSubmit = _ref.handleSubmit,
        onSubmit = _ref.onSubmit,
        formSize = _ref.formSize,
        successMessage = _ref.successMessage,
        rest = _objectWithoutProperties(_ref, ["submitting", "pristine", "submitSucceeded", "error", "handleSubmit", "onSubmit", "formSize", "successMessage"]);

    return (0, _core.jsx)(_semanticUiReact.Form, {
      onSubmit: handleSubmit(onSubmit),
      size: formSize,
      error: !(0, _utils.isEmpty)(error),
      success: (0, _utils.isEmpty)(error)
    }, error && (0, _core.jsx)(_FormError.default, {
      error: error,
      defaultError: defaultError
    }), successMessage && (0, _core.jsx)(_InlineMessage.default, {
      pristine: pristine,
      visible: submitSucceeded,
      render: function render(_ref2) {
        var onDismiss = _ref2.onDismiss;
        return (0, _core.jsx)(_semanticUiReact.Message, {
          success: true,
          content: successMessage,
          onDismiss: onDismiss
        });
      }
    }), (0, _core.jsx)(WrappedComponent, _extends({
      submitting: submitting,
      pristine: pristine,
      submitSucceeded: submitSucceeded,
      formSize: formSize
    }, rest)));
  };

  WithBasicForm.propTypes = {
    submitting: _propTypes.default.bool,
    pristine: _propTypes.default.bool,
    submitSucceeded: _propTypes.default.bool,
    error: _propTypes.default.string,
    handleSubmit: _propTypes.default.func.isRequired,
    onSubmit: _propTypes.default.func.isRequired,
    onCancel: _propTypes.default.func,
    formSize: _propTypes.default.string,
    formButtonSize: _propTypes.default.string,
    successMessage: _propTypes.default.string
  };
  WithBasicForm.defaultProps = {
    submitting: false,
    pristine: true,
    submitSucceeded: false,
    error: '',
    formSize: 'small',
    formButtonSize: 'small',
    onCancel: undefined,
    successMessage: ''
  };
  WithBasicForm.displayName = "WithBasicForm(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return WithBasicForm;
};

var _default = withBasicForm;
exports.default = _default;
module.exports = exports.default;