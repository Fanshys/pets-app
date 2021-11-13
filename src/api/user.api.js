import firebase from 'firebase';

async function login(login, password) {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(login, password);

    return {
      status: true,
      user: userCredential.user,
    };
  } catch (error) {
    return {
      status: false,
      errorCode: error.code,
    };
  }
}

async function register(login, password, name) {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(login, password);

    const ref = firebase.database().ref(`users/${userCredential.user.uid}`);
    ref.set({ name: name });

    return {
      status: true,
      user: userCredential.user,
    };
  } catch (error) {
    return {
      status: false,
      errorCode: error.code,
    };
  }
}

async function logout() {
  try {
    await firebase.auth().signOut();

    return {
      status: true,
    };
  } catch (error) {
    return {
      status: false,
      errorCode: error.code,
    };
  }
}

export const userApi = {
  login: login,
  register: register,
  logout: logout,
};
