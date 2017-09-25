import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { getDisplayName } from 'javascript-utils/lib/react';

export const withWarnOnWindowUnload = (WrappedComponent, leaveMessage = `Leave with unsaved changes?`) => {
  class WithWarnOnWindowUnload extends Component {
    constructor(props) {
      super(props);
      this.routerWillLeave = this.routerWillLeave.bind(this);
    }

    componentDidMount() {
      this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    }

    routerWillLeave() {
      if (this.props.isUnSafeToUnload) {
        return leaveMessage;
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithWarnOnWindowUnload.propTypes = {
    isUnSafeToUnload: PropTypes.bool,

    // react-router
    router: PropTypes.object,
    route: PropTypes.object
  };

  WithWarnOnWindowUnload.displayName = `WithWarnOnWindowUnload(${getDisplayName(WrappedComponent)})`;

  return withRouter(WithWarnOnWindowUnload);
};
