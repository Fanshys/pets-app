import { alertTypes } from '../types';

interface AlertInterface {
  text: string;
  type: string;
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
