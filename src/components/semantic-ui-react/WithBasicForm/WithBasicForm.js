import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { getDisplayName } from 'javascript-utils/lib/react';
import { isEmpty } from 'javascript-utils/lib/utils';
import FormError from '../FormError';

const withBasicForm = (WrappedComponent, defaultError) => {
  const WithBasicForm = ({
    submitting, error, handleSubmit, onSubmit, formSize, ...rest
  }) => (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      size={formSize}
      error={!isEmpty(error)}
    >
      {error && <FormError error={error} defaultError={defaultError} />}
      <WrappedComponent
        submitting={submitting}
        formSize={formSize}
        {...rest}
      />
    </Form>
  );

  WithBasicForm.propTypes = {
    submitting: PropTypes.bool,
    pristine: PropTypes.bool,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    formSize: PropTypes.string,
    formButtonSize: PropTypes.string
  };

  WithBasicForm.defaultProps = {
    submitting: false,
    pristine: true,
    error: '',
    formSize: 'small',
    formButtonSize: 'small',
    onCancel: undefined
  };

  WithBasicForm.displayName = `WithBasicForm(${getDisplayName(WrappedComponent)})`;

  return WithBasicForm;
};

export default withBasicForm;
