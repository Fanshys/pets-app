import { userApi } from 'api/user.api';
import { getErrorTextByType } from 'helpers/getErrorTextByType';
import { userTypes } from '../types';
import { alertCreate } from './alert';
import firebase from 'firebase';

export const userLogin = (email: string, password: string) => {
  return async (dispatch: Function) => {
    dispatch(request());

    const result = await userApi.login(email, password);

    if (result.status) {
      localStorage.setItem('user', JSON.stringify(result.user));
      dispatch(success(result.user));
    } else {
      const text = getErrorTextByType(result.errorCode);

      dispatch(failure());
      dispatch(alertCreate(text, 'error'));
    }
  };

  function request() {
    return { type: userTypes.LOGIN_REQUEST };
  }
  function success(user: firebase.User | null | undefined) {
    return { type: userTypes.LOGIN_SUCCESS, user };
  }
  function failure() {
    return { type: userTypes.LOGIN_FAILURE };
  }
};

export const userRegister = (email: string, password: string, name: string) => {
  return async (dispatch: Function) => {
    dispatch(request());

    const result = await userApi.register(email, password, name);

    if (result.status) {
      localStorage.setItem('user', JSON.stringify(result.user));
      dispatch(success(result.user));
    } else {
      const text = getErrorTextByType(result.errorCode);

      dispatch(failure());
      dispatch(alertCreate(text, 'error'));
    }
  };

  function request() {
    return { type: userTypes.REGISTER_REQUEST };
  }
  function success(user: firebase.User | null | undefined) {
    return { type: userTypes.REGISTER_SUCCESS, user };
  }
  function failure() {
    return { type: userTypes.REGISTER_FAILURE };
  }
};

export const userLogout = () => {
  return async (dispatch: Function) => {
    dispatch(request());
    await userApi.logout();
    localStorage.removeItem('user');
    dispatch(success());
  };

  function request() {
    return { type: userTypes.LOGOUT_REQUEST };
  }
  function success() {
    return { type: userTypes.LOGOUT_SUCCESS };
  }
};
