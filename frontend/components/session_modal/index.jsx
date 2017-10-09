import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionForm from './session_form';
import { selectFormType } from 'reducers/selectors';

class SessionModal extends Component {

  handleSubmit = (values) => {
    const formData = new FormData();

    formData.append("username", values.username);
    formData.append("password", values.password);

    if (this.props.formType = 'sign_up') {
      formData.append("email", values.email);
    }
  }


  render() {
    return (
      <div className="session-modal-constainer">
        <h1>{this.props.formType}</h1>
        <SessionForm formType={this.props.formType} />
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

  }
}


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionModal)
);
