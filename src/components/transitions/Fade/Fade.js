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

const Fade = ({ in: inProp, children, duration }) => {
  const normalizedDuration = typeof duration !== 'number' ? duration : 300;
  console.log(inProp);
  return (
    <Transition in={inProp} timeout={normalizedDuration}>
      {(state) => (
        <div style={{
          opacity: 0,
          transition: `opacity ${normalizedDuration}ms ease-in-out`,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  );
};

Fade.propTypes = {
  inProp: PropTypes.bool,
  children: PropTypes.node.isRequired,
  duration: PropTypes.number
};

export default Fade;
