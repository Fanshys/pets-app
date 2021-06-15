import { AUTH_LOGIN } from './types';

export const authLogin = (data) => {
  return {
    type: AUTH_LOGIN,
    payload: data,
  };
};
