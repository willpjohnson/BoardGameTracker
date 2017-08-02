import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';

import CatanReducer from './games/catan_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  catan: CatanReducer
});

export default RootReducer;
