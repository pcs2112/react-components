/**
 * HOC to display a form success message.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'javascript-utils/lib/react';

export const withFormSuccessSummary = (WrappedComponent) => {
  class WithFormSuccessSummary extends Component {
    static propTypes = {
      pristine: PropTypes.bool.isRequired,
      submitSucceeded: PropTypes.bool.isRequired
    };

    shouldComponentUpdate(nextProps) {
      return (!this.props.submitSucceeded && nextProps.submitSucceeded) || (this.props.pristine && !nextProps.pristine);
    }

    render() {
      if (!this.props.submitSucceeded) {
        return null;
      }

      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  WithFormSuccessSummary.displayName = `WithFormSuccessSummary(${getDisplayName(WrappedComponent)})`;

  return WithFormSuccessSummary;
};
