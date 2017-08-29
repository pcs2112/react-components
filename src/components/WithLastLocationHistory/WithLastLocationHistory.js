/**
 * HOC to save the last location pathname and query
 * used when this component was accessed.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { getDisplayName } from 'javascript-utils/lib/react';

/**
 * @param {Object} WrappedComponent
 * @param {String} pathname - URL Pathname used to access this component
 * @returns {WithLastLocationHistory}
 */
export const withLastLocationHistory = (WrappedComponent, pathname) => {
  class WithLastLocationHistory extends Component {
    static propTypes = {
      location: PropTypes.object.isRequired
    };

    constructor(props) {
      super(props);
      this.setLastLocation(props.location);
      this.goBack = this.goBack.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      this.setLastLocation(nextProps.location);
    }

    setLastLocation(location) {
      if (!this.lastLocation) {
        this.lastLocation = {
          pathname: pathname
        };
      }

      if (location && location.pathname === pathname) {
        this.lastLocation = {
          pathname: location.pathname,
          query: location.query
        };
      }
    }

    goBack() {
      browserHistory.push({
        pathname: pathname,
        query: this.lastLocation ? {} : this.lastLocation.query
      });
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          lastLocation={this.lastLocation}
          goBack={this.goBack}
        />
      );
    }
  }

  WithLastLocationHistory.displayName = `WithLastLocationHistory(${getDisplayName(WrappedComponent)})`;

  return WithLastLocationHistory;
};
