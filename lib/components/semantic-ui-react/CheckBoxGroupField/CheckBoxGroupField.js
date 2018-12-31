"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _utils = require("javascript-utils/lib/utils");

var _FieldPropTypes = require("../FieldPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckBoxGroupField =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckBoxGroupField, _Component);

  function CheckBoxGroupField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckBoxGroupField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckBoxGroupField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCurrentValues", function () {
      var value = _this.props.input.value;
      var previousValues = [];

      if (!(0, _utils.isEmpty)(value)) {
        previousValues = value;
      }

      return Array.isArray(previousValues) ? _toConsumableArray(previousValues) : [previousValues];
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (event, _ref) {
      var checked = _ref.checked,
          value = _ref.value;
      var onChange = _this.props.input.onChange;

      var values = _this.getCurrentValues();

      if (checked) {
        values.push(value);
      } else {
        values.splice(values.indexOf(value), 1);
      }

      onChange(values);
    });

    return _this;
  }

  _createClass(CheckBoxGroupField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          required = _this$props.required,
          _this$props$meta = _this$props.meta,
          touched = _this$props$meta.touched,
          error = _this$props$meta.error,
          options = _this$props.options,
          grouped = _this$props.grouped;
      var values = this.getCurrentValues();
      return (0, _core.jsx)(_semanticUiReact.Form.Group, {
        grouped: grouped
      }, label && (0, _core.jsx)(_semanticUiReact.Form.Field, {
        error: !!(touched && error),
        required: required
      }, (0, _core.jsx)("label", null, label)), options.map(function (option, i) {
        var optionLabel = option.text;
        var optionValue = option.value;
        var optionChecked = values.indexOf(optionValue) > -1;
        var key = "key".concat(i);
        return (0, _core.jsx)(_semanticUiReact.Form.Field, {
          key: key
        }, (0, _core.jsx)(_semanticUiReact.Checkbox, {
          label: optionLabel,
          checked: optionChecked,
          value: optionValue,
          onClick: _this2.handleOnChange
        }));
      }), touched && error && (0, _core.jsx)(_semanticUiReact.Form.Field, {
        error: true
      }, (0, _core.jsx)(_semanticUiReact.Label, {
        basic: true,
        color: "red",
        pointing: true
      }, error)));
    }
  }]);

  return CheckBoxGroupField;
}(_react.Component);

_defineProperty(CheckBoxGroupField, "propTypes", _objectSpread({}, _FieldPropTypes.optionsFieldProps, {
  grouped: _propTypes.default.bool
}));

_defineProperty(CheckBoxGroupField, "defaultProps", {
  grouped: true
});

var _default = CheckBoxGroupField;
exports.default = _default;
module.exports = exports.default;