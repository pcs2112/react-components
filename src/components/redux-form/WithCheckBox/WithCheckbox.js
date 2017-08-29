import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'javascript-utils/lib/react';
import withFormField from '../WithFormField';

/**
 * Library agnostic html checkbox field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @param {Object} WrappedCheckBoxComponent
 * @returns {Object} withFormField
 */
export const withCheckBox = (WrappedFormFieldComponent, WrappedCheckBoxComponent) => {
  const WithCheckBox = ({
    input,
    inputProps = {
      readOnly: false,
      fitted: false
    },
    placeholder
  }) => {
    return (
      <WrappedCheckBoxComponent
        { ...inputProps }
        type="CheckBox"
        { ...input }
        label={placeholder}
        checked={input.checked}
        onChange={(e, d) => {
          input.onChange(d.checked ? 1 : 0);
        }}
        onClick={(e, d) => {
          input.onChange(d.checked ? 1 : 0);
        }}
        onBlur={() => {
          input.onBlur();
        }}
      />
    );
  };

  WithCheckBox.propTypes = {
    input: PropTypes.object.isRequired,
    inputProps: PropTypes.object,
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
  };

  WithCheckBox.displayName = `WithCheckBox(${getDisplayName(WrappedCheckBoxComponent)}))`;

  return withFormField(WrappedFormFieldComponent, WithCheckBox);
};
