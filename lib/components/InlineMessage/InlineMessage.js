"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InlineMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(InlineMessage, _Component);

  _createClass(InlineMessage, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.visible && !state.visible) {
        return {
          visible: true
        };
      }

      if (props.pristine && state.visible) {
        return null;
      }

      return {
        visible: false
      };
    }
  }]);

  function InlineMessage(props) {
    var _this;

    _classCallCheck(this, InlineMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InlineMessage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDismiss", function () {
      _this.setState({
        visible: false
      });
    });

    var visible = _this.props.visible;
    _this.state = {
      visible: visible
    };
    return _this;
  }

  _createClass(InlineMessage, [{
    key: "render",
    value: function render() {
      var visible = this.state.visible;

      if (!visible) {
        return null;
      }

      var render = this.props.render;
      return render({
        onDismiss: this.onDismiss
      });
    }
  }]);

  return InlineMessage;
}(_react.Component);

_defineProperty(InlineMessage, "propTypes", {
  pristine: _propTypes.default.bool.isRequired,
  // eslint-disable-line
  visible: _propTypes.default.bool.isRequired,
  render: _propTypes.default.func.isRequired
});

var _default = InlineMessage;
exports.default = _default;
module.exports = exports.default;