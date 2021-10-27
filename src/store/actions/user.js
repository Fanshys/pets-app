import { userTypes } from '../types';

export const userLogin = (data) => {
  return {
    type: userTypes.LOGIN,
    payload: data,
  };
};
