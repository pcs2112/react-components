import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intersection from 'lodash/intersection';
import isEqual from 'lodash/isEqual';
import { getDisplayName } from 'javascript-utils/lib/react';

/**
 * HOC to make role award components.
 *
 * @param {Object} WrappedComponent
 * @param {Array} allowedRoles - List of allowed roles that is used to check against the current role
 * @returns {WithRoleAwareness}
 */
export const withRoleAwareness = (WrappedComponent, allowedRoles) => {
  class WithRoleAwareness extends Component {

    static propTypes = {
      role: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
    };

    constructor(props) {
      super(props);

      const { role } = this.props;

      this.allowedRoles = allowedRoles;
      this.roles = [role];
    }

    componentWillReceiveProps(nextProps) {
      if (!isEqual(this.props.role, nextProps.role)) {
        this.setRoles(nextProps.role);
      }
    }

    setRoles(role) {
      this.roles = Array.isArray(role) ? role : [role];
    }

    rolesMatched(roles) {
      return this.allowedRoles.length < 1 ||
        intersection((roles || this.allowedRoles), this.roles).length > 0;
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }

  WithRoleAwareness.displayName = `WithRoleAwareness(${getDisplayName(WrappedComponent)})`;

  return WithRoleAwareness;
};
