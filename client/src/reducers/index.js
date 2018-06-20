import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import profiles from './profiles'

const rootReducer = combineReducers({
  user,
  flash,
  profiles,
});

export default rootReducer;
