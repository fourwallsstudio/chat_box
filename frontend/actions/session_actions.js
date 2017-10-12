import axios from 'axios';
import { setJsonWebToken } from '../util/jwt_util';

import { receiveUser } from 'actions/user_actions';
import { receiveErrors } from 'actions/error_actions';

export const RECEIVE_CURRENT_USER = 'SESSION::RECEIVE_CURRENT_USER'

export const signUp = (formData) => {
  return (dispatch) => {
    axios.post('/users', formData)
      .then( res => {
        setJsonWebToken(res)
        return dispatch(receiveCurrentUser(res.data))
      })
      .catch( err => dispatch(receiveErrors(err.response.data)))
  }
}

export const login = (formData) => {
  return (dispatch) => {
    axios.post('/users/sign_in', formData)
      .then( res => {
        setJsonWebToken(res)
        return dispatch(receiveCurrentUser(res.data))
      })
      .catch( err => dispatch(receiveErrors(err.response.data)))
  }
}

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}
