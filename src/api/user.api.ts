import firebase from 'firebase';
import { getApiErrorCode } from 'helpers/apiError';

interface userResponseInterface {
  status: boolean;
  errorCode?: string;
  user?: firebase.User | null;
}

type UserCredential = {
  additionalUserInfo?: firebase.auth.AdditionalUserInfo | null;
  credential: firebase.auth.AuthCredential | null;
  operationType?: string | null;
  user: firebase.User | null;
};

async function login(
  login: string,
  password: string
): Promise<userResponseInterface> {
  try {
    const userCredential: UserCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(login, password);

    return {
      status: true,
      user: userCredential.user,
    };
  } catch (error) {
    return {
      status: false,
      errorCode: getApiErrorCode(error),
    };
  }
}

async function register(
  login: string,
  password: string,
  name: string
): Promise<userResponseInterface> {
  try {
    const userCredential: UserCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(login, password);

    const ref = firebase.database().ref(`users/${userCredential.user?.uid}`);
    ref.set({ name: name });

    return {
      status: true,
      user: userCredential.user,
    };
  } catch (error) {
    return {
      status: false,
      errorCode: getApiErrorCode(error),
    };
  }
}

async function logout(): Promise<userResponseInterface> {
  try {
    await firebase.auth().signOut();

    return {
      status: true,
    };
  } catch (error) {
    return {
      status: false,
      errorCode: getApiErrorCode(error),
    };
  }
}

export const userApi = {
  login: login,
  register: register,
  logout: logout,
};
