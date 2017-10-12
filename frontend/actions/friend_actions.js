import axios from 'axios';
import { setJsonWebToken, getJsonWebToken } from '../util/jwt_util';

import { receiveCurrentUser } from './session_actions';
import { receiveError } from './error_actions';

export const unfriend = (friendship) => {
  return (dispatch) => {
    const token = getJsonWebToken();
    axios.delete('/friendships/1',
      {
        params: {friendship},
        headers: {'authorization': token}
      }
    )
      .then( res => dispatch(receiveCurrentUser(res.data)))
      .catch( err => dispatch(receiveError(err.response.data)))
  }
}

export const makeFriendRequest = (friendRequest) => {
  return (dispatch) => {
    const token = getJsonWebToken();
    axios.post('/friend_requests', friendRequest,
      {
        headers: {'authorization': token}
      }
    )
      .then( res => dispatch(receiveCurrentUser(res.data)))
      .catch( err => dispatch(receiveError(err.response.data)))
  }
}

export const cancelFriendRequest = (friendRequest) => {
  return (dispatch) => {
    const token = getJsonWebToken();
    axios.delete('/friend_requests/1',
      {
        params: {friendRequest},
        headers: {'authorization': token}
      }
    )
      .then( res => dispatch(receiveCurrentUser(res.data)))
      .catch( err => dispatch(receiveError(err.response.data)))
  }
}

export const acceptFriendRequest = (friendRequest) => {
  return (dispatch) => {
    const token = getJsonWebToken();
    axios.patch('/friend_requests/1', friendRequest,
      {
        headers: {'authorization': token}
      }
    )
      .then( res => dispatch(receiveCurrentUser(res.data)))
      .catch( err => dispatch(receiveError(err.response.data)))
  }
}
