import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: userReducer,
  form: formReducer,
  search: searchReducer,
  errors: errorReducer,
});

export default rootReducer;
