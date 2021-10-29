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

async function register(login, password) {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(login, password);

    console.log(userCredential);
  } catch (error) {
    console.error(error);
  }
}

function logout() {
  try {
    return firebase.auth().signOut();
  } catch (error) {
    console.error(error);
  }
}

export const userApi = {
  login: login,
  register: register,
  logout: logout,
};
