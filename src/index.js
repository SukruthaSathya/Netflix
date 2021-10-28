import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Context/FirebaseContext'
import firebase from './Firebase/config'
import Context from './Context/Context';



ReactDOM.render(
  <Context>
    <FirebaseContext.Provider value={{ firebase }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FirebaseContext.Provider>
    </Context>,
  document.getElementById('root')
);
