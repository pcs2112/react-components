import React from 'react';
import PropTypes from 'prop-types';
import { Message, Form } from 'semantic-ui-react';
import { getDisplayName } from 'javascript-utils/lib/react';
import { isEmpty } from 'javascript-utils/lib/utils';
import FormError from '../FormError';
import InlineMessage from '../../InlineMessage';

const withBasicForm = (WrappedComponent, defaultError) => {
  const WithBasicForm = ({
    submitting, pristine, submitSucceeded, error, handleSubmit, onSubmit, formSize, successMessage, ...rest
  }) => (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      size={formSize}
      error={!isEmpty(error)}
      success={isEmpty(error)}
    >
      {error && <FormError error={error} defaultError={defaultError} />}
      {successMessage && (
        <InlineMessage
          pristine={pristine}
          visible={submitSucceeded}
          render={({ onDismiss }) => (
            <Message
              success
              content={successMessage}
              onDismiss={onDismiss}
            />
          )}
        />
      )}
      <WrappedComponent
        submitting={submitting}
        pristine={pristine}
        submitSucceeded={submitSucceeded}
        formSize={formSize}
        {...rest}
      />
    </Form>
  );

  WithBasicForm.propTypes = {
    submitting: PropTypes.bool,
    pristine: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    formSize: PropTypes.string,
    formButtonSize: PropTypes.string,
    successMessage: PropTypes.string
  };

  WithBasicForm.defaultProps = {
    submitting: false,
    pristine: true,
    submitSucceeded: false,
    error: '',
    formSize: 'small',
    formButtonSize: 'small',
    onCancel: undefined,
    successMessage: ''
  };

  WithBasicForm.displayName = `WithBasicForm(${getDisplayName(WrappedComponent)})`;

  return WithBasicForm;
};

export default withBasicForm;
