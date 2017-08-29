'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAsyncData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('javascript-utils/lib/react');

var _device = require('javascript-utils/lib/device');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HOC to provide functionality to load async
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * data when a components is mounted.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var withAsyncData = exports.withAsyncData = function withAsyncData(WrappedComponent) {
  var WithAsyncData = function (_Component) {
    _inherits(WithAsyncData, _Component);

    function WithAsyncData(props) {
      _classCallCheck(this, WithAsyncData);

      var _this = _possibleConstructorReturn(this, (WithAsyncData.__proto__ || Object.getPrototypeOf(WithAsyncData)).call(this, props));

      _this.promise = null;
      return _this;
    }

    _createClass(WithAsyncData, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if ((0, _device.isDOMAvailable)() && this.props.loadItems && !this.props.loading) {
          this.promise = this.props.loadItems();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if ((0, _device.isDOMAvailable)() && this.props.loading && this.promise) {
          this.promise.abort();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithAsyncData;
  }(_react.Component);

  WithAsyncData.propTypes = {
    loading: _propTypes2.default.bool.isRequired,
    items: _propTypes2.default.array,
    itemsPagination: _propTypes2.default.object,
    loadItems: _propTypes2.default.func.isRequired
  };


  WithAsyncData.displayName = 'WithAsyncData(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return WithAsyncData;
};