'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLastLocationHistory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HOC to save the last location pathname and query
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * used when this component was accessed.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * @param {Object} WrappedComponent
 * @param {String} pathname - URL Pathname used to access this component
 * @returns {WithLastLocationHistory}
 */
var withLastLocationHistory = exports.withLastLocationHistory = function withLastLocationHistory(WrappedComponent, pathname) {
  var WithLastLocationHistory = function (_Component) {
    _inherits(WithLastLocationHistory, _Component);

    function WithLastLocationHistory(props) {
      _classCallCheck(this, WithLastLocationHistory);

      var _this = _possibleConstructorReturn(this, (WithLastLocationHistory.__proto__ || Object.getPrototypeOf(WithLastLocationHistory)).call(this, props));

      _this.setLastLocation(props.location);
      _this.goBack = _this.goBack.bind(_this);
      return _this;
    }

    _createClass(WithLastLocationHistory, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setLastLocation(nextProps.location);
      }
    }, {
      key: 'setLastLocation',
      value: function setLastLocation(location) {
        if (!this.lastLocation) {
          this.lastLocation = {
            pathname: pathname
          };
        }

        if (location && location.pathname === pathname) {
          this.lastLocation = {
            pathname: location.pathname,
            query: location.query
          };
        }
      }
    }, {
      key: 'goBack',
      value: function goBack() {
        _reactRouter.browserHistory.push({
          pathname: pathname,
          query: this.lastLocation ? {} : this.lastLocation.query
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          lastLocation: this.lastLocation,
          goBack: this.goBack
        }));
      }
    }]);

    return WithLastLocationHistory;
  }(_react.Component);

  WithLastLocationHistory.propTypes = {
    location: _propTypes2.default.object.isRequired
  };


  WithLastLocationHistory.displayName = 'WithLastLocationHistory(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return WithLastLocationHistory;
};