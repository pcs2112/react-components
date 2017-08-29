import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'javascript-utils/lib/react';
import withFormField from '../WithFormField';

/**
 * Library agnostic html TextArea field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @param {Object} WrappedTextAreaComponent
 * @returns {Object} withFormField
 */
export const withTextArea = (WrappedFormFieldComponent, WrappedTextAreaComponent) => {
  const WithTextArea = ({ input, htmlAttributes = { rows: 3 }, inputProps, placeholder }) => {
    return (
      <WrappedTextAreaComponent
        { ...htmlAttributes }
        { ...inputProps }
        { ...input }
        placeholder={placeholder}
      />
    );
  };

  WithTextArea.propTypes = {
    input: PropTypes.object.isRequired,
    htmlAttributes: PropTypes.object,
    inputProps: PropTypes.object,
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
  };

  WithTextArea.displayName = `WithTextArea(${getDisplayName(WrappedTextAreaComponent)}))`;

  return withFormField(WrappedFormFieldComponent, WithTextArea);
};
