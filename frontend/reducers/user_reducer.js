import { RECEIVE_USER } from 'actions/user_actions';

const defaultState = {
  usersByIds: {}
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {

    case RECEIVE_USER:
      return {
        usersByIds: { [action.user.id]: action.user }
      };

    default:
      return state;
  }
}

export default userReducer;
