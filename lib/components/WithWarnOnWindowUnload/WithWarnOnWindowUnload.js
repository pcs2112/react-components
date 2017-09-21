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

var withWarnOnWindowUnload = exports.withWarnOnWindowUnload = function withWarnOnWindowUnload(WrappedComponent) {
  var leaveMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Leave with unsaved changes?';

  var WithWarnOnWindowUnload = function (_Component) {
    _inherits(WithWarnOnWindowUnload, _Component);

    function WithWarnOnWindowUnload() {
      _classCallCheck(this, WithWarnOnWindowUnload);

      return _possibleConstructorReturn(this, (WithWarnOnWindowUnload.__proto__ || Object.getPrototypeOf(WithWarnOnWindowUnload)).apply(this, arguments));
    }

    _createClass(WithWarnOnWindowUnload, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this._promptUnsavedChange(this.props.isUnSafeToUnload);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.onbeforeunload = null;
      }
    }, {
      key: '_promptUnsavedChange',
      value: function _promptUnsavedChange() {
        var isUnSafeToUnload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        // Detecting page transition (prevent leaving by setting true)
        // for React Router version > 2.4
        if (isUnSafeToUnload) {
          this.props.router.setRouteLeaveHook(this.props.route, function () {
            return isUnSafeToUnload && confirm(leaveMessage);
          });
        } else {
          this.props.router.setRouteLeaveHook(this.props.route, function () {});
        }

        // Detecting browser close
        if (isUnSafeToUnload) {
          window.onbeforeunload = isUnSafeToUnload && function () {
            return leaveMessage;
          };
        } else {
          window.onbeforeunload = null;
        }
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
    router: _propTypes2.default.object,
    route: _propTypes2.default.object
  };

  WithWarnOnWindowUnload.displayName = 'WithWarnOnWindowUnload(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return (0, _reactRouter.withRouter)(WithWarnOnWindowUnload);
};