import { RECEIVE_USER } from 'actions/user_actions';

const defaultState = {
  usersByIds: {},
  ids: []
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {

    case RECEIVE_USER:
      return {
        usersByIds: {
          ...state.usersByIds,
          [action.user.id]: action.user
        },
        ids: [
          ...state.ids,
          action.user.id
        ]
      };

    default:
      return state;
  }
}

export default userReducer;
