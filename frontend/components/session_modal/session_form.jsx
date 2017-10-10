import React from 'react';
import { Field, reduxForm } from 'redux-form';


const validate = (values) => {
  const errors = {};
  const req = 'required';

  if (!values.email) errors.email = req;
  if (!values.password) errors.password = req;

  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label htmlFor={label}>{label}:</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


let SessionForm = (props) => {

  const {
    formType,
    handleSubmit
  } = props;

  return (
    <div className="session-form-container">
      <form onSubmit={handleSubmit}>

        <Field
          name="email"
          type="email"
          component={renderField}
          label="email"
        />

        <Field
          name="password"
          type="password"
          component={renderField}
          label="password"
        />

      <button type="submit">{formType}</button>
      </form>
    </div>
  )
}


SessionForm = reduxForm({
  form: 'session',
  validate
})(SessionForm)

export default SessionForm;
