import axios from 'axios';
import { receiveErrors } from './error_actions';

export const RECEIVE_SEARCH_RESULTS = 'SEARCH::RECEIVE_SEARCH_RESULTS'

export const searchFriends = (search) => {
  return (dispatch) => {
    axios.get('users/search', { params: { search } })
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
