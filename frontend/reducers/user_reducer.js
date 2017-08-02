import merge from 'lodash/merge';
import values from 'lodash/values';

import { RECEIVE_USER } from '../actions/user_actions';

const defaultState = {
  user_info: {
    id: 0,
    username: null
  },
  game_stats: {
    catan_stats: null
  }
};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, state, action.user)
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
