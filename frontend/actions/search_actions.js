import axios from 'axios';
import { getJsonWebToken } from '../util/jwt_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_SEARCH_RESULTS = 'SEARCH::RECEIVE_SEARCH_RESULTS'

export const searchFriends = (search) => {
  return (dispatch) => {
    const token = getJsonWebToken();
    axios.get('users/search',
      {
        params: { search },
        headers: {'authorization': token}
      }
    )
      .then( res => dispatch(receiveSearchResults(res.data)))
      .catch( err => dispatch(receiveErrors(err.response.data)))
  }
}

const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  }
}
