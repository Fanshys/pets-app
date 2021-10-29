import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  alerts: alertReducer,
});
