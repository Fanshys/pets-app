import { USER_LOGIN } from '../actions/user';

export const authLogin = (data) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};
