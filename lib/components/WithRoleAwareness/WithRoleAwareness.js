'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRoleAwareness = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _react3 = require('javascript-utils/lib/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HOC to make role award components.
 *
 * @param {Object} WrappedComponent
 * @param {Array} allowedRoles - List of allowed roles that is used to check against the current role
 * @returns {WithRoleAwareness}
 */
var withRoleAwareness = exports.withRoleAwareness = function withRoleAwareness(WrappedComponent, allowedRoles) {
  var WithRoleAwareness = function (_Component) {
    _inherits(WithRoleAwareness, _Component);

    function WithRoleAwareness(props) {
      _classCallCheck(this, WithRoleAwareness);

      var _this = _possibleConstructorReturn(this, (WithRoleAwareness.__proto__ || Object.getPrototypeOf(WithRoleAwareness)).call(this, props));

      var role = _this.props.role;


      _this.allowedRoles = allowedRoles;
      _this.roles = [role];
      return _this;
    }

    _createClass(WithRoleAwareness, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!(0, _isEqual2.default)(this.props.role, nextProps.role)) {
          this.setRoles(nextProps.role);
        }
      }
    }, {
      key: 'setRoles',
      value: function setRoles(role) {
        this.roles = Array.isArray(role) ? role : [role];
      }
    }, {
      key: 'rolesMatched',
      value: function rolesMatched(roles) {
        return this.allowedRoles.length < 1 || (0, _intersection2.default)(roles || this.allowedRoles, this.roles).length > 0;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithRoleAwareness;
  }(_react.Component);

  WithRoleAwareness.propTypes = {
    role: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]).isRequired
  };


  WithRoleAwareness.displayName = 'WithRoleAwareness(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return WithRoleAwareness;
};