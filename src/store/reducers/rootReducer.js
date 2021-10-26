import { combineReducers } from 'redux';
import { authReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: authReducer,
});
