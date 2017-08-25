/**
 * HOC to display a form's error summary.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from '../../utils';

export const withFormErrorSummary = (WrappedComponent) => {
  const WithFormErrorSummary = ({ errors }) => {
    if (!errors) {
      return null;
    }

    const errKeys = Object.keys(errors);
    const keysLength = errKeys.length;
    if (keysLength < 1) {
      return null;
    }

    let headerError;
    const normalizedErrors = [];

    for (let i = 0; i < keysLength; i++) {
      const key = errKeys[i];
      if (key === '_error') {
        headerError = errors[key];
      } else {
        normalizedErrors.push(errors[key]);
      }
    }

    if (normalizedErrors.length < 1) {
      return (
        <WrappedComponent
          error
          header={headerError}
        />
      );
    }

    return (
      <WrappedComponent
        error
        header={headerError}
        list={normalizedErrors}
      />
    );
  };

  WithFormErrorSummary.propTypes = {
    error: PropTypes.object
  };

  WithFormErrorSummary.displayName = `WithFormErrorSummary(${getDisplayName(WrappedComponent)})`;

  return WithFormErrorSummary;
};
