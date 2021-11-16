import { AlertInterface, AlertType } from 'store/reducers/alertReducer';
import { alertTypes } from '../types';

export const alertCreate = (text: string, type: AlertType) => {
  return (dispatch: Function) => {
    dispatch(create({ text, type }));

    setTimeout(() => dispatch(remove()), 5000);
  };

  function create(alert: AlertInterface) {
    return { type: alertTypes.CREATE, alert };
  }

  function remove() {
    return { type: alertTypes.REMOVE };
  }
};
