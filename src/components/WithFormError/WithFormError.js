/**
 * HOC to display a form error message.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'javascript-utils/lib/react';

export const withFormError = (WrappedComponent) => {
  const WithFormError = ({ error, defaultError }) => {
    if (!error || error === defaultError) {
      return null;
    }

    return (
      <WrappedComponent
        error={error}
      />
    );
  };

  WithFormError.propTypes = {
    error: PropTypes.string,
    defaultError: PropTypes.string.isRequired
  };

  WithFormError.defaultProps = {
    error: undefined
  };

  WithFormError.displayName = `WithFormError(${getDisplayName(WrappedComponent)})`;

  return WithFormError;
};
