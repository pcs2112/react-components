import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { getDisplayName } from 'javascript-utils/lib/react';

export const withWarnOnWindowUnload = (WrappedComponent, leaveMessage = `Leave with unsaved changes?`) => {
  class WithWarnOnWindowUnload extends Component {
    componentDidUpdate() {
      this._promptUnsavedChange(this.props.isUnSafeToUnload);
    }

    componentWillUnmount() {
      window.onbeforeunload = null;
    }

    _promptUnsavedChange(isUnSafeToUnload = false) {
      // Detecting page transition (prevent leaving by setting true)
      // for React Router version > 2.4
      if (isUnSafeToUnload) {
        this.props.router.setRouteLeaveHook(this.props.route, () => isUnSafeToUnload && confirm(leaveMessage));
      } else {
        this.props.router.setRouteLeaveHook(this.props.route, () => {});
      }

      // Detecting browser close
      if (isUnSafeToUnload) {
        window.onbeforeunload = isUnSafeToUnload && (() => leaveMessage);
      } else {
        window.onbeforeunload = null;
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
