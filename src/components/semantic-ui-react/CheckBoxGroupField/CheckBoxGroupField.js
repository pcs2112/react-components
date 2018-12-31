import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Checkbox } from 'semantic-ui-react';
import { isEmpty } from 'javascript-utils/lib/utils';
import { optionsFieldProps } from '../FieldPropTypes';

class CheckBoxGroupField extends Component {
  static propTypes = {
    ...optionsFieldProps,
    grouped: PropTypes.bool
  };

  static defaultProps = {
    grouped: true
  };

  getCurrentValues = () => {
    const { input: { value } } = this.props;

    let previousValues = [];

    if (!isEmpty(value)) {
      previousValues = value;
    }

    return Array.isArray(previousValues) ? [...previousValues] : [previousValues];
  };

  handleOnChange = (event, { checked, value }) => {
    const { onChange } = this.props.input;
    const values = this.getCurrentValues();

    if (checked) {
      values.push(value);
    } else {
      values.splice(values.indexOf(value), 1);
    }

    onChange(values);
  };

  render() {
    const {
      label,
      required,
      meta: { touched, error },
      options,
      grouped
    } = this.props;

    const values = this.getCurrentValues();

    return (
      <Form.Group grouped={grouped}>
        {label && (
          <Form.Field
            error={!!(touched && error)}
            required={required}
          >
            <label>{label}</label>
          </Form.Field>
        )}
        {options.map((option, i) => {
          const optionLabel = option.text;
          const optionValue = option.value;
          const optionChecked = values.indexOf(optionValue) > -1;
          const key = `key${i}`;

          return (
            <Form.Field key={key}>
              <Checkbox
                label={optionLabel}
                checked={optionChecked}
                value={optionValue}
                onClick={this.handleOnChange}
              />
            </Form.Field>
          );
        })}
        {touched && error && (
          <Form.Field error>
            <Label basic color="red" pointing>
              {error}
            </Label>
          </Form.Field>
        )}
      </Form.Group>
    );
  }
}

export default CheckBoxGroupField;
