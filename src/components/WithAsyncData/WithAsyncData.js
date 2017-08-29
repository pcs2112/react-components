/**
 * HOC to provide functionality to load async
 * data when a components is mounted.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'javascript-utils/lib/react';
import { isDOMAvailable } from 'javascript-utils/lib/device';

export const withAsyncData = (WrappedComponent) => {
  class WithAsyncData extends Component {
    static propTypes = {
      loading: PropTypes.bool.isRequired,
      items: PropTypes.array,
      itemsPagination: PropTypes.object,
      loadItems: PropTypes.func.isRequired
    };

    constructor(props) {
      super(props);
      this.promise = null;
    }

    componentWillMount() {
      if (isDOMAvailable() && this.props.loadItems && !this.props.loading ) {
        this.promise = this.props.loadItems();
      }
    }

    componentWillUnmount() {
      if (isDOMAvailable() && this.props.loading && this.promise) {
        this.promise.abort();
      }
    }

    render() {
      return (
        <WrappedComponent { ...this.props } />
      );
    }
  }

  WithAsyncData.displayName = `WithAsyncData(${getDisplayName(WrappedComponent)})`;

  return WithAsyncData;
};
