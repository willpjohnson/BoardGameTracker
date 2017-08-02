import merge from 'lodash/merge';
import values from 'lodash/values';

import { RECEIVE_CATAN_GAMES, RECEIVE_CATAN_GAME } from '../../actions/games/catan_actions';

const defaultState = {
  index: [],
  show: {
    data: {
      date: null,
      id: 0
    },
    performances: []
  }
};

const CatanReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CATAN_GAMES:
      newState = merge({}, state);
      newState.index = values(action.games);
      return newState;
    case RECEIVE_CATAN_GAME:
      newState = merge({}, defaultState);
      newState.show.data.id = action.game.id;
      newState.show.data.date = action.game.date;
      for (var key in action.game) {
        if (key === "date" || key === "id") continue;
        newState.show.performances.push(action.game[key]);
      }
      newState.show.performances.sort( (a, b) => {
        if (a.order < b.order) {
          return -1;
        } else if (a.order >= b.order) {
          return 1;
        }
      })
      return newState;
    default:
      return state;
  }
};

export default CatanReducer;
