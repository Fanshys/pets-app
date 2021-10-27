import { userTypes } from '../types';

const initialState = {
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOGIN:
      return {
        ...state,
        isAuthorized: true,
      };
    default:
      return state;
  }
};
