/**
 * HOC to display a form error message.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from '../../utils';

export const withFormError = (WrappedComponent, defaultError) => {
  const WithFormError = ({ error }) => {
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
    error: PropTypes.string
  };

  WithFormError.displayName = `WithFormError(${getDisplayName(WrappedComponent)})`;

  return WithFormError;
};
