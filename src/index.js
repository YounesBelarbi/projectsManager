import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/auth';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import 'firebase/database';
import 'firebase/firestore'


import './styles/style.css';
import App from './components/App';
import appStore from './store'
import {fbConfig} from './components/config/firebaseConfig'

// react-redux-firebase 
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)
firebase.firestore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: appStore.dispatch,
  // createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <Provider store={appStore}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
