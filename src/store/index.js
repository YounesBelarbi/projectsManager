import { createStore } from 'redux';


import rootReducer from './rootReducer';


const appStore = createStore(rootReducer);


export default appStore;