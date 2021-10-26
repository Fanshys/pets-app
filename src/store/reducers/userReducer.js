import { USER_LOGIN } from '../actions/user';

const initialState = {
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuthorized: true,
      };
    default:
      return state;
  }
};
