import { RECEIVE_SEARCH_RESULTS } from 'actions/search_actions';

const defaultState = {
  results: []
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {

    case RECEIVE_SEARCH_RESULTS:
      return { results: action.results };

    default:
      return state;
  }
}

export default searchReducer;
