'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withListSummary = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withListSummary = exports.withListSummary = function withListSummary(WrappedComponent) {
  var WithListSummary = function WithListSummary(_ref) {
    var currentPage = _ref.currentPage,
        totalPages = _ref.totalPages,
        totalItems = _ref.totalItems,
        pageSize = _ref.pageSize,
        currentPageTotalItems = _ref.currentPageTotalItems,
        _ref$summaryText = _ref.summaryText,
        summaryText = _ref$summaryText === undefined ? null : _ref$summaryText,
        _ref$paginationEnable = _ref.paginationEnabled,
        paginationEnabled = _ref$paginationEnable === undefined ? false : _ref$paginationEnable;

    var start = currentPage * pageSize + 1;
    var end = start + currentPageTotalItems - 1;

    if (end > totalItems) {
      end = totalItems;
      start = end - currentPageTotalItems + 1;
    }

    var finalSummaryText = summaryText;

    if (paginationEnabled) {
      if (summaryText === null) {
        finalSummaryText = 'Displaying {start}-{end} of {count} result' + (totalItems === 1 ? '' : 's') + '.';
      }

      var search = ['{start}', '{end}', '{count}', '{page}', '{pages}'];
      var replace = [start, end, totalItems, currentPage + 1, totalPages];
      finalSummaryText = (0, _utils.replaceArray)(finalSummaryText, search, replace);
    } else {
      if (finalSummaryText === null) {
        finalSummaryText = 'Total {count} result' + (totalItems === 1 ? '' : 's') + '.';
      }

      var _search = ['{count}', '{start}', '{end}', '{page}', '{pages}'];
      var _replace = [currentPageTotalItems, 1, currentPageTotalItems, 1, 1];
      finalSummaryText = (0, _utils.replaceArray)(finalSummaryText, _search, _replace);
    }

    return _react2.default.createElement(WrappedComponent, {
      summaryText: finalSummaryText
    });
  };

  WithListSummary.propTypes = {
    currentPage: _propTypes2.default.number.isRequired,
    totalPages: _propTypes2.default.number.isRequired,
    totalItems: _propTypes2.default.number.isRequired,
    pageSize: _propTypes2.default.number.isRequired,
    currentPageTotalItems: _propTypes2.default.number.isRequired,
    summaryText: _propTypes2.default.string,
    paginationEnabled: _propTypes2.default.bool
  };

  WithListSummary.displayName = 'WithListSummary(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';

  return WithListSummary;
}; /**
    * React component to display the pagination summary
    * of a list of items.
    */