import { alertTypes } from '../types';

export const alertCreate = (text, type) => {
  return (dispatch) => {
    dispatch(create({ text, type }));

    setTimeout(() => dispatch(remove()), 5000);
  };

  function create(alert) {
    return { type: alertTypes.CREATE, alert };
  }

  function remove() {
    return { type: alertTypes.REMOVE };
  }
};
