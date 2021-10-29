import { alertTypes } from '../types';

export const alertCreate = (text, type) => {
  return (dispatch) => {
    dispatch(
      create({
        text,
        type,
      })
    );
  };

  function create(alert) {
    return { type: alertTypes.CREATE, alert };
  }
};
