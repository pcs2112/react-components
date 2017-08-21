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

const Fade = ({ in: inProp, children, duration = 300 }) => {
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div style={{
          opacity: 0,
          transition: `opacity ${duration}ms ease-in-out`,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  );
};

Fade.propTypes = {
  inProp: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  duration: PropTypes.number.isRequired
};

export default Fade;
