import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

const defaultStyle = {
  opacity: 0
};

const transitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
};

const Fade = ({ in: inProp, children, duration }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
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
  in: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  duration: PropTypes.number
};

Fade.defaultProps = {
  duration: 300
};

export default Fade;
