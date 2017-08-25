/**
 * HOC to display a form's error summary.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from '../../utils';

export const withErrorSummary = (WrappedComponent) => {
  const WithErrorSummary = ({ errors }) => {
    if (!errors) {
      return null;
    }

    const errKeys = Object.keys(errors);
    const keysLength = errKeys.length;
    if (keysLength < 1) {
      return null;
    }

    let error;
    const normalizedErrors = [];

    for (let i = 0; i < keysLength; i++) {
      const key = errKeys[i];
      if (key === '_error') {
        error = errors[key];
      } else {
        normalizedErrors.push(errors[key]);
      }
    }

    if (normalizedErrors.length < 1) {
      return (
        <WrappedComponent
          error={error}
        />
      );
    }

    return (
      <WrappedComponent
        error={error}
        errorList={normalizedErrors}
      />
    );
  };

  WithErrorSummary.propTypes = {
    errors: PropTypes.object
  };

  WithErrorSummary.displayName = `WithErrorSummary(${getDisplayName(WrappedComponent)})`;

  return WithErrorSummary;
};
