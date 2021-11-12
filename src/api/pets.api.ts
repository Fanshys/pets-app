import firebase from 'firebase';
import { getApiErrorCode } from 'helpers/apiError';

export interface PetInterface {
  about: string;
  age: string;
  groupID: number;
  img: string;
  likes: number;
  location: string;
  name: string;
  sex: boolean;
  type: string;
  weight: string;
}

export interface PetListInterface {
  [key: string]: PetInterface;
}

interface getPetsResponseInterface {
  status: boolean;
  errorCode?: string;
  pets?: PetListInterface;
}

async function getAll(): Promise<getPetsResponseInterface> {
  try {
    const ref = firebase.database().ref('animals');
    const result = await ref.once('value');

    return {
      status: true,
      pets: result.val(),
    };
  } catch (error) {
    return {
      status: false,
      errorCode: getApiErrorCode(error),
    };
  }
}

export const petsApi = {
  getAll: getAll,
};
