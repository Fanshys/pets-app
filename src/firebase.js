import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCTKFVPORd4_zq8m-OUUhceRfSoZNoRiIE',
  authDomain: 'vue-app-pets.firebaseapp.com',
  databaseURL: 'https://vue-app-pets-default-rtdb.firebaseio.com',
  projectId: 'vue-app-pets',
  storageBucket: 'vue-app-pets.appspot.com',
  messagingSenderId: '474114702267',
  appId: '1:474114702267:web:30e54d6d5519c9fba4a29e',
};

firebase.initializeApp(firebaseConfig);
