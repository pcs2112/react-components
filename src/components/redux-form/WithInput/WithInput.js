import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'javascript-utils/lib/react';
import withFormField from '../WithFormField';

/**
 * Library agnostic html input field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @param {Object} WrappedInputComponent
 * @returns {Object} withFormField
 */
export const withInput = (WrappedFormFieldComponent, WrappedInputComponent) => {
  const WithInput = ({ input, type, htmlAttributes, inputProps, placeholder }) => {
    if (type === 'hidden') {
      return (
        <WrappedInputComponent
          { ...htmlAttributes }
          { ...inputProps }
          type="hidden"
          { ...input }
        />
      );
    }

    return (
      <WrappedInputComponent
        { ...htmlAttributes }
        { ...inputProps }
        type={type}
        { ...input }
        placeholder={placeholder}
      />
    );
  };

  WithInput.propTypes = {
    input: PropTypes.object.isRequired,
    type: PropTypes.oneOf([
      'color',
      'date',
      'datetime-local',
      'month',
      'text',
      'tel',
      'password',
      'email',
      'number',
      'range',
      'search',
      'time',
      'url',
      'week',
      'hidden'
    ]).isRequired,
    htmlAttributes: PropTypes.object,
    inputProps: PropTypes.object,
    placeholder: PropTypes.string
  };

  WithInput.displayName = `WithInput(${getDisplayName(WrappedInputComponent)}))`;

  return withFormField(WrappedFormFieldComponent, WithInput);
};
