import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'

import authReducer from './authReducer';
import projectsReducer from "./projectsReducer";


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  project: projectsReducer,
  firestore: firestoreReducer
});

export default rootReducer;
