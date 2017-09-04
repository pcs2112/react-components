'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withResponsiveness = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _react3 = require('javascript-utils/lib/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HOC to provide responsiveness to components.
 *
 * @param {Object} WrappedComponent
 * @param {String|Function} initialDevice - Allowed values are "mobile", "tablet" or "computer"
 * @param {Object} responsiveBreakPoints
 * @returns {WithResponsiveness}
 */
var withResponsiveness = exports.withResponsiveness = function withResponsiveness(WrappedComponent) {
  var initialDevice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'computer';
  var responsiveBreakPoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    computer: 992,
    tablet: 768,
    mobile: 320
  };

  var WithResponsiveness = function (_Component) {
    _inherits(WithResponsiveness, _Component);

    function WithResponsiveness(props) {
      _classCallCheck(this, WithResponsiveness);

      var _this = _possibleConstructorReturn(this, (WithResponsiveness.__proto__ || Object.getPrototypeOf(WithResponsiveness)).call(this, props));

      _this.state = {
        device: typeof initialDevice === 'function' ? initialDevice() : initialDevice
      };

      _this.onWindowResize = (0, _debounce2.default)(_this.onWindowResize.bind(_this), 300);
      return _this;
    }

    _createClass(WithResponsiveness, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
      }
    }, {
      key: 'onWindowResize',
      value: function onWindowResize(event) {
        var device = this.getDeviceMode(event);
        if (device !== this.state.device) {
          this.setState({ device: device });
        }
      }
    }, {
      key: 'getDeviceMode',
      value: function getDeviceMode() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var device = void 0;

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
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({
          device: this.state.device
        }, this.props));
      }
    }]);

    return WithResponsiveness;
  }(_react.Component);

  WithResponsiveness.displayName = 'WithResponsiveness(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return WithResponsiveness;
};