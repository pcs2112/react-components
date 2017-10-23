import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { getDisplayName } from 'javascript-utils/lib/react';

/**
 * HOC to provide responsiveness to components.
 *
 * @param {Object} WrappedComponent
 * @param {String|Function} initialDevice - Allowed values are "mobile", "tablet" or "computer"
 * @param {Object} responsiveBreakPoints
 * @returns {WithResponsiveness}
 */
export const withResponsiveness = (WrappedComponent, initialDevice = 'computer', responsiveBreakPoints = {
  computer: 992,
  tablet: 768,
  mobile: 320
}) => {
  class WithResponsiveness extends Component {
    static getDeviceMode(event = null) {
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

    constructor(props) {
      super(props);

      this.state = {
        device: typeof initialDevice === 'function' ? initialDevice() : initialDevice
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
      const device = WithResponsiveness.getDeviceMode(event);
      if (device !== this.state.device) {
        this.setState({ device });
      }
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

  WithResponsiveness.displayName = `WithResponsiveness(${getDisplayName(WrappedComponent)})`;

  return WithResponsiveness;
};
