import axios from 'axios';

import { receiveUser } from 'actions/user_actions';
import { receiveErrors } from 'actions/error_actions';

export const RECEIVE_CURRENT_USER = 'SESSION::RECEIVE_CURRENT_USER'

export const signUp = (formData) => {
  return (dispatch) => {
    axios.post('/users', formData)
      .then( res => dispatch(receiveUser(res.data)))
      .then( res => dispatch(receiveCurrentUser(res.user.id)))
      .catch( err => dispatch(receiveErrors(err.response.data)))
  }
}

export const login = (formData) => {
  return (dispatch) => {
    axios.post('/users/sign_in', formData)
      .then( res => dispatch(receiveUser(res.data)))
      .then( res => dispatch(receiveCurrentUser(res.user.id)))
      .catch( err => dispatch(receiveErrors(err.response.data)))
  }
}

const receiveCurrentUser = (id) => {
  return {
    type: RECEIVE_CURRENT_USER,
    id
  }
}
