import axios from 'axios';

export const RECEIVE_USER =  'USER::RECEIVE_USER';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}
