import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';


import rootReducer from './reducers/rootReducer';
import {fbConfig} from '../firebase/firebaseConfig';

const appStore = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase})),
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
);

export default appStore;