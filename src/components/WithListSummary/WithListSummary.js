/**
 * React component to display the pagination summary
 * of a list of items.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { replaceArray, getDisplayName } from '../../utils';

export const withListSummary = (WrappedComponent) => {
  class WithListSummary extends Component {
    static propTypes = {
      currentPage: PropTypes.number.isRequired,
      totalPages: PropTypes.number.isRequired,
      totalItems: PropTypes.number.isRequired,
      pageSize: PropTypes.number.isRequired,
      currentPageTotalItems: PropTypes.number.isRequired,
      summaryText: PropTypes.string,
      paginationEnabled: PropTypes.bool
    };

    static defaultProps = {
      summaryText: null,
      paginationEnabled: false
    };

    getSummary() {
      const {
        currentPage,
        totalPages,
        totalItems,
        pageSize,
        currentPageTotalItems,
        summaryText,
        paginationEnabled,
      } = this.props;

      let start = currentPage * pageSize + 1;
      let end = start + currentPageTotalItems - 1;

      if (end > totalItems) {
        end = totalItems;
        start = end - currentPageTotalItems + 1;
      }

      let finalSummaryText = summaryText;

      if (paginationEnabled) {
        if (summaryText === null) {
          finalSummaryText = 'Displaying {start}-{end} of {count} result' + (currentPageTotalItems === 1 ? '' : 's') + '.';
        }

        const search = ['{start}', '{end}', '{count}', '{page}', '{pages}'];
        const replace = [start, end, totalItems, currentPage + 1, totalPages];
        finalSummaryText = replaceArray(finalSummaryText, search, replace);
      } else {
        if (finalSummaryText === null) {
          finalSummaryText = 'Total {count} result' + (currentPageTotalItems === 1 ? '' : 's') + '.';
        }

        const search = ['{count}', '{start}', '{end}', '{page}', '{pages}'];
        const replace = [currentPageTotalItems, 1, currentPageTotalItems, 1, 1];
        finalSummaryText = replaceArray(finalSummaryText, search, replace);
      }

      return finalSummaryText;
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          summaryText={this.getSummary()}
        />
      );
    }
  }

  WithListSummary.displayName = `WithListSummary(${getDisplayName(WrappedComponent)})`;

  return WithListSummary;
};
