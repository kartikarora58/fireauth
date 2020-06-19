import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const firebase=require('firebase')
const firebaseConfig={
    apiKey: "AIzaSyC45t6uhcW0wFr82PrC9qXaISubasSWJag",
    authDomain: "chat-6a3e7.firebaseapp.com",
    databaseURL: "https://chat-6a3e7.firebaseio.com",
    projectId: "chat-6a3e7",
    storageBucket: "chat-6a3e7.appspot.com",
    messagingSenderId: "850390706140",
    appId: "1:850390706140:web:cf829e1d4d4eefcfd2d119",
    measurementId: "G-NELHPRMTV7"
  };
  firebase.initializeApp(firebaseConfig);
if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
