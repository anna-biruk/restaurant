import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducer from '../src/reducers';

const persistConfig = {
    key: 'somekey',
    storage,
    whiteList: ['items']
};
const persistedReducer = persistReducer(persistConfig, reducer);


const store = createStore(persistedReducer, composeWithDevTools());
persistStore(store);

export default store;
