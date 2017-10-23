import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

const transitionStyles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

const Fade = ({ children, duration, ...props }) => (
  <Transition {...props} timeout={duration}>
    {state => (
      <div style={{
        opacity: 0,
        transition: `opacity ${duration}ms ease-in-out`,
        ...transitionStyles[state]
      }}
      >
        {children}
      </div>
    )}
  </Transition>
);

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number
};

Fade.defaultProps = {
  duration: 500
};

export default Fade;
