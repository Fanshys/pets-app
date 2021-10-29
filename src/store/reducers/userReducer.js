import { userTypes } from '../types';

const initialState = {
  isAuthorized: false,
  user: {},
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case userTypes.LOGIN_SUCCESS:
      return {
        isAuthorized: true,
        user: action.user,
      };
    case userTypes.LOGIN_FAILURE:
      return initialState;

    case userTypes.REGISTER_REQUEST:
      return {
        loading: true,
      };
    case userTypes.REGISTER_SUCCESS:
      return {
        isAuthorized: true,
        user: action.user,
      };

    case userTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userTypes.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
