import { PetListInterface } from 'api/pets.api';
import { petsTypes } from '../types';

interface petsStateInterface {
  items: PetListInterface;
  loading?: boolean;
}

interface petsReducerActionInterface {
  type: string;
  pets: PetListInterface;
}

const initialState: petsStateInterface = {
  items: {},
  loading: false,
};

export const petsReducer = (
  state: petsStateInterface = initialState,
  action: petsReducerActionInterface
): petsStateInterface => {
  switch (action.type) {
    case petsTypes.GET_REQUEST:
      return {
        items: state.items,
        loading: true,
      };
    case petsTypes.GET_SUCCESS:
      return {
        items: action.pets,
      };
    case petsTypes.GET_FAILURE:
      return initialState;

    default:
      return state;
  }
};
