import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
import { petsReducer } from './petsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  alerts: alertReducer,
  pets: petsReducer,
});
