import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'javascript-utils/lib/react';

/**
 * Returns the field's placeholder value.
 *
 * @param {String} label
 * @param {String} placeholder
 * @returns {String}
 */
const getPlaceholder = (label, placeholder) => {
  return !placeholder ? label : placeholder;
};

/**
 * Library agnostic HOC to wrap input components.
 * @param {Object} WrappedComponent
 * @param {Object} WrappedInputComponent
 *
 * @returns {Object} WithFormField
 */
export const withFormField = (WrappedComponent, WrappedInputComponent) => {
  const WithFormField = ({ label, placeholder, meta: { touched, error }, fieldProps, fieldErrorTextClassName, ...props }) => {
    const hasError = touched && (typeof error === 'string');
    return (
      <WrappedComponent { ...fieldProps } error={hasError}>
        {label &&
        <label>{label}</label>
        }
        <WrappedInputComponent
          {...props}
          placeholder={getPlaceholder(label, placeholder)}
        />
        {hasError && <div className={fieldErrorTextClassName}>{error}</div>}
      </WrappedComponent>
    );
  };

  WithFormField.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
    meta: PropTypes.object.isRequired,
    fieldProps: PropTypes.object,
    fieldErrorTextClassName: PropTypes.string
  };

  WithFormField.displayName = `WithFormField(${getDisplayName(WrappedComponent)})`;

  return WithFormField;
};
