import merge from 'lodash/merge';
import values from 'lodash/values';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CATAN_PERFORMANCES } from '../actions/performances/catan_actions';

const defaultState = {
  user_info: {
    id: 0,
    username: null
  },
  game_stats: {
    catan_stats: null
  },
  game_performances: {
    catan_performances: []
  }
};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, state, action.user);
      return newState;
    case RECEIVE_CATAN_PERFORMANCES:
      newState = merge({}, state);
      newState.game_performances.catan_performances = values(action.performances);
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
