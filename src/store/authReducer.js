import { AUTH_LOGIN } from './types';

const initialState = {
  auth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, auth: { ...state.auth, auth: true } };
    default:
      return state;
  }
};
