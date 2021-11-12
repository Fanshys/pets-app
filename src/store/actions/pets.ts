import { PetListInterface, petsApi } from 'api/pets.api';
import { getErrorTextByType } from 'helpers/getErrorTextByType';
import { petsTypes } from '../types';
import { alertCreate } from './alert';

export const getPets = () => {
  return async (dispatch: Function) => {
    dispatch(request());

    const result = await petsApi.getPets();

    if (result.status && result.pets) {
      dispatch(success(result.pets));
    } else {
      const text = getErrorTextByType(result.errorCode);

      dispatch(failure());
      dispatch(alertCreate(text, 'error'));
    }
  };

  function request() {
    return { type: petsTypes.GET_REQUEST };
  }
  function success(pets: PetListInterface) {
    return { type: petsTypes.GET_SUCCESS, pets };
  }
  function failure() {
    return { type: petsTypes.GET_FAILURE };
  }
};
