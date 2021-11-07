import { userTypes } from '../types';

interface userStateInterface {
  isAuthorized?: boolean;
  user?: object;
  loading?: boolean;
}

interface userReducerActionInterface {
  type: string;
  user?: object;
}

const baseState: userStateInterface = {
  isAuthorized: false,
  user: {},
  loading: false,
};

let initialState: userStateInterface = baseState;

if (localStorage.getItem('user')) {
  initialState = {
    user: JSON.parse(localStorage.getItem('user') || ''),
    isAuthorized: true,
  };
}

export const userReducer = (
  state: userStateInterface = initialState,
  action: userReducerActionInterface
): userStateInterface => {
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
