import { userApi } from 'api/user.api';
import { userTypes } from '../types';

export const userLogin = (login, password) => {
  return async (dispatch) => {
    dispatch(request());
    const result = await userApi.login(login, password);

    if (result.status) {
      dispatch(success(result.user));
    } else {
      dispatch(failure());
    }
  };

  function request(user) {
    return { type: userTypes.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userTypes.LOGIN_SUCCESS, user };
  }
  function failure(user) {
    return { type: userTypes.LOGIN_FAILURE, user };
  }
};

export const userRegister = (login, password) => {
  return async (dispatch) => {
    dispatch(request());
    const user = await userApi.register(login, password);
    dispatch(success(user));
  };

  function request(user) {
    return { type: userTypes.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userTypes.REGISTER_SUCCESS, user };
  }
};

export const userLogout = () => {
  return async (dispatch) => {
    dispatch(request());
    await userApi.logout();
    dispatch(success());
  };

  function request(user) {
    return { type: userTypes.LOGOUT_REQUEST, user };
  }
  function success(user) {
    return { type: userTypes.LOGOUT_SUCCESS, user };
  }
};
