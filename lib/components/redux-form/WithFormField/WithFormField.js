'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFormField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('javascript-utils/lib/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
        props = _objectWithoutProperties(_ref, ['label', 'placeholder', 'meta', 'fieldProps', 'fieldErrorTextClassName']);

    var hasError = touched && typeof error === 'string';
    return _react2.default.createElement(
      WrappedComponent,
      _extends({}, fieldProps, { error: hasError }),
      label && _react2.default.createElement(
        'label',
        null,
        label
      ) // eslint-disable-line
      ,
      _react2.default.createElement(WrappedInputComponent, _extends({}, props, {
        placeholder: getPlaceholder(label, placeholder)
      })),
      hasError && _react2.default.createElement(
        'div',
        { className: fieldErrorTextClassName },
        error
      )
    );
  };

  WithFormField.propTypes = {
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node, _propTypes2.default.element]),
    placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node, _propTypes2.default.element]),
    meta: _propTypes2.default.object.isRequired,
    fieldProps: _propTypes2.default.object,
    fieldErrorTextClassName: _propTypes2.default.string
  };

  WithFormField.displayName = 'WithFormField(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return WithFormField;
};
exports.withFormField = withFormField;