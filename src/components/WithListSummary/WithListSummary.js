/**
 * React component to display the pagination summary
 * of a list of items.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'javascript-utils/lib/react';
import { replaceArray } from 'javascript-utils/lib/string';

export const withListSummary = (WrappedComponent) => {
  const WithListSummary = ({
    currentPage,
    totalPages,
    totalItems,
    pageSize,
    currentPageTotalItems,
    summaryText,
    paginationEnabled
  }) => {
    if (totalItems < 1) {
      return null;
    }

    const normalizedCurrentPage = currentPage - 1;
    const normalizedPaginationEnabled = totalItems < 1 ? false : paginationEnabled;
    let start = (normalizedCurrentPage * pageSize) + 1;
    let end = start + (currentPageTotalItems - 1);

    if (end > totalItems) {
      end = totalItems;
      start = end - (currentPageTotalItems + 1);
    }

    let finalSummaryText = summaryText;

    if (normalizedPaginationEnabled) {
      if (summaryText === null) {
        finalSummaryText = 'Displaying {start}-{end} of {count} {results}.';
      }

      const search = ['{start}', '{end}', '{count}', '{page}', '{pages}', '{results}'];
      const replace = [
        start,
        end,
        totalItems,
        normalizedCurrentPage + 1,
        totalPages,
        totalItems === 1 ? 'result' : 'results'
      ];
      finalSummaryText = replaceArray(finalSummaryText, search, replace);
    } else {
      if (finalSummaryText === null) {
        const s = totalItems === 1 ? '' : 's';
        finalSummaryText = `Total {count} result${s}.`;
      }

      const search = ['{count}', '{start}', '{end}', '{page}', '{pages}', '{results}'];
      const replace = [currentPageTotalItems, 1, currentPageTotalItems, 1, 1, totalItems === 1 ? 'result' : 'results'];
      finalSummaryText = replaceArray(finalSummaryText, search, replace);
    }

    return (
      <WrappedComponent
        summaryText={finalSummaryText}
      />
    );
  };

  WithListSummary.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPageTotalItems: PropTypes.number.isRequired,
    summaryText: PropTypes.string,
    paginationEnabled: PropTypes.bool
  };

  WithListSummary.defaultProps = {
    summaryText: null,
    paginationEnabled: false
  };

  WithListSummary.displayName = `WithListSummary(${getDisplayName(WrappedComponent)})`;

  return WithListSummary;
};
