"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withListSummary = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("javascript-utils/lib/react");

var _string = require("javascript-utils/lib/string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React component to display the pagination summary
 * of a list of items.
 */
var withListSummary = function withListSummary(WrappedComponent) {
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
        finalSummaryText = "Total {count} result".concat(s, ".");
      }

      var _search = ['{count}', '{start}', '{end}', '{page}', '{pages}', '{results}'];
      var _replace = [currentPageTotalItems, 1, currentPageTotalItems, 1, 1, totalItems === 1 ? 'result' : 'results'];
      finalSummaryText = (0, _string.replaceArray)(finalSummaryText, _search, _replace);
    }

    return (0, _core.jsx)(WrappedComponent, {
      summaryText: finalSummaryText
    });
  };

  WithListSummary.propTypes = {
    currentPage: _propTypes.default.number.isRequired,
    totalPages: _propTypes.default.number.isRequired,
    totalItems: _propTypes.default.number.isRequired,
    pageSize: _propTypes.default.number.isRequired,
    currentPageTotalItems: _propTypes.default.number.isRequired,
    summaryText: _propTypes.default.string,
    paginationEnabled: _propTypes.default.bool
  };
  WithListSummary.defaultProps = {
    summaryText: null,
    paginationEnabled: false
  };
  WithListSummary.displayName = "WithListSummary(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return WithListSummary;
};

exports.withListSummary = withListSummary;