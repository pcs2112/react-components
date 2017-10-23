import React from 'react';
import PropTypes from 'prop-types';
import withFormField from '../WithFormField';

/**
 * Library agnostic html select field wrapper.
 *
 * @param {Object} WrappedFormFieldComponent
 * @returns {Object} withFormField
 */
export const withSelect = (WrappedFormFieldComponent) => {
  const WithSelect = ({
    input,
    options,
    optionLabelProp = 'name',
    optionValueProp = 'id',
    optionsPrompt,
    htmlAttributes,
    inputProps
  }) => (
    <select
      {...htmlAttributes}
      {...inputProps}
      {...input}
    >
      <option value="">{optionsPrompt}</option>
      {
        options.map(option => (
          <option
            key={option[optionValueProp]}
            value={option[optionValueProp]}
          >
            {option[optionLabelProp]}
          </option>
        ))
      }
    </select>
  );

  WithSelect.propTypes = {
    input: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    optionLabelProp: PropTypes.string.isRequired,
    optionValueProp: PropTypes.string.isRequired,
    optionsPrompt: PropTypes.string.isRequired,
    htmlAttributes: PropTypes.object,
    inputProps: PropTypes.object
  };

  WithSelect.displayName = 'WithSelect(select)';

  return withFormField(WrappedFormFieldComponent, WithSelect);
};
