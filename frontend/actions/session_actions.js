import axios from 'axios';
import { setJsonWebToken, removeJsonWebToken, getJsonWebToken } from '../util/jwt_util';

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

export const loginWithJWT = () => {
  return (dispatch) => {
    const token = getJsonWebToken();
    axios.post('/users/sign_in', {}, {headers: {'authorization': token}})
      .then( res => {
        setJsonWebToken(res)
        return dispatch(receiveCurrentUser(res.data))
      })
      .catch( err => dispatch(receiveErrors(err.response.data)))
  }
}

export const logout = (user) => {
  return (dispatch) => {
    axios.delete('/users/sign_out', { params: { user } })
      .then( res => {
        removeJsonWebToken();
        return dispatch(receiveCurrentUser(null))
      })
  }
}

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}
