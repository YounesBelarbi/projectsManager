import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';


import rootReducer from './reducers/rootReducer';


const appStore = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))
    );

export default appStore;