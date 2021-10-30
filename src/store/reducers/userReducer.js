import { userTypes } from '../types';

const baseState = {
  isAuthorized: false,
  user: {},
  loading: false,
};

let initialState = baseState;

if (localStorage.getItem('user')) {
  initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    isAuthorized: true,
  };
}

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
      return baseState;

    case userTypes.REGISTER_REQUEST:
      return {
        loading: true,
      };
    case userTypes.REGISTER_SUCCESS:
      return {
        isAuthorized: true,
        user: action.user,
      };
    case userTypes.REGISTER_FAILURE:
      return baseState;

    case userTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userTypes.LOGOUT_SUCCESS:
      return baseState;
    default:
      return state;
  }
};
