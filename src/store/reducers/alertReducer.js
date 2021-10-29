import { alertTypes } from '../types';

const initialState = [];

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case alertTypes.CREATE:
      return [...state, action.alert];

    case alertTypes.REMOVE:
      return state.slice(0, -1);

    default:
      return state;
  }
};
