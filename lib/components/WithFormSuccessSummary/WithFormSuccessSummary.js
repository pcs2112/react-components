'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFormSuccessSummary = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('javascript-utils/lib/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HOC to display a form success message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var withFormSuccessSummary = exports.withFormSuccessSummary = function withFormSuccessSummary(WrappedComponent) {
  var WithFormSuccessSummary = function (_Component) {
    _inherits(WithFormSuccessSummary, _Component);

    function WithFormSuccessSummary() {
      _classCallCheck(this, WithFormSuccessSummary);

      return _possibleConstructorReturn(this, (WithFormSuccessSummary.__proto__ || Object.getPrototypeOf(WithFormSuccessSummary)).apply(this, arguments));
    }

    _createClass(WithFormSuccessSummary, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return !this.props.submitSucceeded && nextProps.submitSucceeded || this.props.pristine && !nextProps.pristine;
      }
    }, {
      key: 'render',
      value: function render() {
        if (!this.props.submitSucceeded) {
          return null;
        }

        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithFormSuccessSummary;
  }(_react.Component);

  WithFormSuccessSummary.propTypes = {
    message: _propTypes2.default.string.isRequired,
    pristine: _propTypes2.default.bool.isRequired,
    submitSucceeded: _propTypes2.default.bool.isRequired
  };


  WithFormSuccessSummary.displayName = 'WithFormSuccessSummary(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return WithFormSuccessSummary;
};