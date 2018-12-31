import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'javascript-utils/lib/react';

export const withCyclePagination = (WrappedComponent) => {
  const WithCyclePagination = props => (
    <WrappedComponent
      {...props}
    />
  );

  WithCyclePagination.propTypes = {
    fetchPrev: PropTypes.func.isRequired,
    fetchNext: PropTypes.func.isRequired,
    prevDisabled: PropTypes.bool.isRequired
  };

  WithCyclePagination.displayName = `WithCyclePagination(${getDisplayName(WrappedComponent)})`;

  return WithCyclePagination;
};
