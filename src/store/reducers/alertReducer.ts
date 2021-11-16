import { alertTypes } from '../types';

export type AlertType = 'error' | 'warning';

export interface AlertInterface {
  text: string;
  type?: AlertType;
}

type alertStateType = Array<AlertInterface>;

interface alertReducerActionInterface {
  type: string;
  alert: AlertInterface;
}

const initialState: alertStateType = [];

export const alertReducer = (
  state: alertStateType = initialState,
  action: alertReducerActionInterface
) => {
  switch (action.type) {
    case alertTypes.CREATE:
      return [...state, action.alert];

    case alertTypes.REMOVE:
      return state.slice(0, -1);

    default:
      return state;
  }
};
