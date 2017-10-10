import axios from 'axios';

import { receiveUser } from 'actions/user_actions';
import { receiveError } from 'actions/error_actions';

export const RECEIVE_CURRENT_USER = 'SESSION::RECEIVE_CURRENT_USER'

export const signUp = (formData) => {
  return (dispatch) => {
    axios.post('/users', formData)
      .then( res => dispatch(receiveUser(res.data.data)))
      .then( res => dispatch(receiveCurrentUser(res.user.id)))
      .catch( err => dispatch(receiveError(err.response.data[0])))
  }
}

export const login = (formData) => {
  return (dispatch) => {
    axios.post('/session', formData)
      .then( res => dispatch(receiveUser(res.data.data)))
      .then( res => dispatch(receiveCurrentUser(res.user.id)))
      .catch( err => dispatch(receiveError(err.response.data[0])))
  }
}

const receiveCurrentUser = (id) => {
  return {
    type: RECEIVE_CURRENT_USER,
    id
  }
}
