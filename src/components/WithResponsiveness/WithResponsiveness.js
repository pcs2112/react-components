import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { getDisplayName } from '../../utils';

/**
 * HOC to provide responsiveness to components.
 *
 * @param {Object} WrappedComponent
 * @param {String} initialDevice - Allowed values are "mobile", "tablet" or "computer"
 * @param {Object} responsiveBreakPoints
 * @returns {WithReponsiveness}
 */
export const withReponsiveness = (WrappedComponent, initialDevice = 'computer', responsiveBreakPoints = {
  computer: 992,
  tablet: 768,
  mobile: 320
}) => {
  if (['mobile', 'tablet', 'computer'].indexOf(initialDevice) < 0) {
    throw Error(`${initialDevice} is an invalid value.`);
  }

  class WithReponsiveness extends Component {
    constructor(props) {
      super(props);

      this.state = {
        device: initialDevice
      };

      this.onWindowResize = debounce(this.onWindowResize.bind(this), 300);
    }

    componentDidMount() {
      window.addEventListener('resize', this.onWindowResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowResize);
    }

    onWindowResize(event) {
      const device = this.getDeviceMode(event);
      if (device !== this.state.device) {
        this.setState({ device: device });
      }
    }

    getDeviceMode(event = null) {
      let device;

      const width = (event && event.target.innerWidth)
        || document.documentElement.clientWidth
        || document.body.clientWidth;

      if (width < responsiveBreakPoints.tablet) {
        device = 'mobile';
      } else if (width < responsiveBreakPoints.computer) {
        device = 'tablet';
      } else {
        device = 'computer';
      }

      return device;
    }

    render() {
      return (
        <WrappedComponent
          device={this.state.device}
          {...this.props}
        />
      );
    }
  }

  WithReponsiveness.displayName = `WithReponsiveness(${getDisplayName(WrappedComponent)})`;

  return WithReponsiveness;
};
