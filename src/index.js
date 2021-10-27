import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './Context/FirebaseContext'
import firebase from './firebase/config'


ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
