'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withListSummary = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * React component to display the pagination summary
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of a list of items.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var withListSummary = exports.withListSummary = function withListSummary(WrappedComponent) {
  var WithListSummary = function (_Component) {
    _inherits(WithListSummary, _Component);

    function WithListSummary() {
      _classCallCheck(this, WithListSummary);

      return _possibleConstructorReturn(this, (WithListSummary.__proto__ || Object.getPrototypeOf(WithListSummary)).apply(this, arguments));
    }

    _createClass(WithListSummary, [{
      key: 'getSummary',
      value: function getSummary() {
        var _props = this.props,
            currentPage = _props.currentPage,
            totalPages = _props.totalPages,
            totalItems = _props.totalItems,
            pageSize = _props.pageSize,
            currentPageTotalItems = _props.currentPageTotalItems,
            summaryText = _props.summaryText,
            paginationEnabled = _props.paginationEnabled;


        var start = currentPage * pageSize + 1;
        var end = start + currentPageTotalItems - 1;

        if (end > totalItems) {
          end = totalItems;
          start = end - currentPageTotalItems + 1;
        }

        var finalSummaryText = summaryText;

        if (paginationEnabled) {
          if (summaryText === null) {
            finalSummaryText = 'Displaying {start}-{end} of {count} result' + (currentPageTotalItems === 1 ? '' : 's') + '.';
          }

          var search = ['{start}', '{end}', '{count}', '{page}', '{pages}'];
          var replace = [start, end, totalItems, currentPage + 1, totalPages];
          finalSummaryText = (0, _utils.replaceArray)(finalSummaryText, search, replace);
        } else {
          if (finalSummaryText === null) {
            finalSummaryText = 'Total {count} result' + (currentPageTotalItems === 1 ? '' : 's') + '.';
          }

          var _search = ['{count}', '{start}', '{end}', '{page}', '{pages}'];
          var _replace = [currentPageTotalItems, 1, currentPageTotalItems, 1, 1];
          finalSummaryText = (0, _utils.replaceArray)(finalSummaryText, _search, _replace);
        }

        return finalSummaryText;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          summaryText: this.getSummary()
        }));
      }
    }]);

    return WithListSummary;
  }(_react.Component);

  WithListSummary.propTypes = {
    currentPage: _propTypes2.default.number.isRequired,
    totalPages: _propTypes2.default.number.isRequired,
    totalItems: _propTypes2.default.number.isRequired,
    pageSize: _propTypes2.default.number.isRequired,
    currentPageTotalItems: _propTypes2.default.number.isRequired,
    summaryText: _propTypes2.default.string,
    paginationEnabled: _propTypes2.default.bool
  };
  WithListSummary.defaultProps = {
    summaryText: null,
    paginationEnabled: false
  };


  WithListSummary.displayName = 'WithListSummary(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';

  return WithListSummary;
};