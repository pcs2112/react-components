'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withWarnOnWindowUnload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _react3 = require('javascript-utils/lib/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iOS = function iOS() {
  var iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];

  if (navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()) {
        return true;
      }
    }
  }

  return false;
};

var withWarnOnWindowUnload = exports.withWarnOnWindowUnload = function withWarnOnWindowUnload(WrappedComponent) {
  var leaveMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Leave with unsaved changes?';

  var WithWarnOnWindowUnload = function (_Component) {
    _inherits(WithWarnOnWindowUnload, _Component);

    function WithWarnOnWindowUnload(props) {
      _classCallCheck(this, WithWarnOnWindowUnload);

      var _this = _possibleConstructorReturn(this, (WithWarnOnWindowUnload.__proto__ || Object.getPrototypeOf(WithWarnOnWindowUnload)).call(this, props));

      _this.routerWillLeave = _this.routerWillLeave.bind(_this);
      return _this;
    }

    _createClass(WithWarnOnWindowUnload, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!iOS()) {
          this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
        }
      }
    }, {
      key: 'routerWillLeave',
      value: function routerWillLeave() {
        if (this.props.isUnSafeToUnload) {
          return leaveMessage;
        }

        return true;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithWarnOnWindowUnload;
  }(_react.Component);

  WithWarnOnWindowUnload.propTypes = {
    isUnSafeToUnload: _propTypes2.default.bool,

    // react-router
    router: _propTypes2.default.object.isRequired,
    route: _propTypes2.default.object.isRequired
  };

  WithWarnOnWindowUnload.defaultProps = {
    isUnSafeToUnload: true
  };

  WithWarnOnWindowUnload.displayName = 'WithWarnOnWindowUnload(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return (0, _reactRouter.withRouter)(WithWarnOnWindowUnload);
};