import axios from 'axios';

import { receiveUser } from './user_actions';
import { receiveError } from './error_actions';

export const unfriend = (friendship) => {
  return (dispatch) => {
    axios.delete('/friendships/1', { params: {friendship} })
      .then( res => dispatch(receiveUser(res.data)))
      .catch( err => dispatch(receiveError(err.response.data)))
  }
}

export const makeFriendRequest = (friendRequest) => {
  return (dispatch) => {
    axios.post('/friend_requests', friendRequest)
      .then( res => dispatch(receiveUser(res.data)))
      .catch( err => dispatch(receiveError(err.response.data)))
  }
}

export const cancelFriendRequest = (friendRequest) => {
  return (dispatch) => {
    axios.delete('/friend_requests/1', { params: {friendRequest} })
      .then( res => dispatch(receiveUser(res.data)))
      .catch( err => dispatch(receiveError(err.response.data)))
  }
}

export const acceptFriendRequest = (friendRequest) => {
  return (dispatch) => {
    axios.patch('/friend_requests/1', friendRequest)
      .then( res => dispatch(receiveUser(res.data)))
      .catch( err => dispatch(receiveError(err.response.data)))
  }
}
