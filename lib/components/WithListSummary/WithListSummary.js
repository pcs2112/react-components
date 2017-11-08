'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withListSummary = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('javascript-utils/lib/react');

var _string = require('javascript-utils/lib/string');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React component to display the pagination summary
 * of a list of items.
 */
var withListSummary = exports.withListSummary = function withListSummary(WrappedComponent) {
  var WithListSummary = function WithListSummary(_ref) {
    var currentPage = _ref.currentPage,
        totalPages = _ref.totalPages,
        totalItems = _ref.totalItems,
        pageSize = _ref.pageSize,
        currentPageTotalItems = _ref.currentPageTotalItems,
        summaryText = _ref.summaryText,
        paginationEnabled = _ref.paginationEnabled;

    if (totalItems < 1) {
      return null;
    }

    var normalizedCurrentPage = currentPage - 1;
    var normalizedPaginationEnabled = totalItems < 1 ? false : paginationEnabled;
    var start = normalizedCurrentPage * pageSize + 1;
    var end = start + (currentPageTotalItems - 1);

    if (end > totalItems) {
      end = totalItems;
      start = end - (currentPageTotalItems + 1);
    }

    var finalSummaryText = summaryText;

    if (normalizedPaginationEnabled) {
      if (summaryText === null) {
        finalSummaryText = 'Displaying {start}-{end} of {count} {results}.';
      }

      var search = ['{start}', '{end}', '{count}', '{page}', '{pages}', '{results}'];
      var replace = [start, end, totalItems, normalizedCurrentPage + 1, totalPages, totalItems === 1 ? 'result' : 'results'];
      finalSummaryText = (0, _string.replaceArray)(finalSummaryText, search, replace);
    } else {
      if (finalSummaryText === null) {
        var s = totalItems === 1 ? '' : 's';
        finalSummaryText = 'Total {count} result' + s + '.';
      }

      var _search = ['{count}', '{start}', '{end}', '{page}', '{pages}', '{results}'];
      var _replace = [currentPageTotalItems, 1, currentPageTotalItems, 1, 1, totalItems === 1 ? 'result' : 'results'];
      finalSummaryText = (0, _string.replaceArray)(finalSummaryText, _search, _replace);
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

  WithListSummary.defaultProps = {
    summaryText: null,
    paginationEnabled: false
  };

  WithListSummary.displayName = 'WithListSummary(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return WithListSummary;
};