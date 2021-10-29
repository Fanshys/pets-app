import { alertTypes } from '../types';

const initialState = [];

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case alertTypes.CREATE:
      return {
        alerts: [...state, action.alert],
      };
    default:
      return state;
  }
};
