"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withResponsiveness = void 0;

var _react = _interopRequireWildcard(require("react"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _react2 = require("javascript-utils/lib/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * HOC to provide responsiveness to components.
 *
 * @param {Object} WrappedComponent
 * @param {String|Function} initialDevice - Allowed values are "mobile", "tablet" or "computer"
 * @param {Object} responsiveBreakPoints
 * @returns {WithResponsiveness}
 */
var withResponsiveness = function withResponsiveness(WrappedComponent) {
  var initialDevice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'computer';
  var responsiveBreakPoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    computer: 992,
    tablet: 768,
    mobile: 320
  };

  var WithResponsiveness =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithResponsiveness, _Component);

    _createClass(WithResponsiveness, null, [{
      key: "getDeviceMode",
      value: function getDeviceMode() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var device;
        var width = event && event.target.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (width < responsiveBreakPoints.tablet) {
          device = 'mobile';
        } else if (width < responsiveBreakPoints.computer) {
          device = 'tablet';
        } else {
          device = 'computer';
        }

        return device;
      }
    }]);

    function WithResponsiveness(props) {
      var _this;

      _classCallCheck(this, WithResponsiveness);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithResponsiveness).call(this, props));
      _this.state = {
        device: typeof initialDevice === 'function' ? initialDevice() : initialDevice
      };
      _this.onWindowResize = (0, _debounce.default)(_this.onWindowResize.bind(_assertThisInitialized(_assertThisInitialized(_this))), 300);
      return _this;
    }

    _createClass(WithResponsiveness, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
      }
    }, {
      key: "onWindowResize",
      value: function onWindowResize(event) {
        var device = WithResponsiveness.getDeviceMode(event);

        if (device !== this.state.device) {
          this.setState({
            device: device
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, _extends({
          device: this.state.device
        }, this.props));
      }
    }]);

    return WithResponsiveness;
  }(_react.Component);

  WithResponsiveness.displayName = "WithResponsiveness(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return WithResponsiveness;
};

exports.withResponsiveness = withResponsiveness;