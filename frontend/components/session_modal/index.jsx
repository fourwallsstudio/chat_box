import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionForm from './session_form';
import { selectFormType } from 'reducers/selectors';
import { signUp, login } from 'actions/session_actions';

class SessionModal extends Component {

  handleSubmit = (values) => {
    const formData = new FormData();

    formData.append("user[email]", values.email);
    formData.append("user[password]", values.password);

    if (this.props.formType === 'sign_up') {
      this.props.signUp(formData);
    } else {
      this.props.login(formData);
    }
  }

  render() {
    return (
      <div className="session-modal-constainer">
        <h1>{this.props.formType}</h1>
        <SessionForm
          formType={this.props.formType}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const combinedState = {...state, ...ownProps};
  return {
    formType: selectFormType(combinedState)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: formData => dispatch(signUp(formData)),
    login: formData => dispatch(login(formData)),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionModal)
);
