import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: userReducer,
  form: formReducer
});

export default rootReducer;
