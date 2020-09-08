import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducer from '../src/reducers';
import thunk from "redux-thunk";

const persistConfig = {
    key: 'somekey',
    storage,
    whiteList: ['menuReducer'],
    blackList: ['modal'],
};
const persistedReducer = persistReducer(persistConfig, reducer);


const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
persistStore(store);

export default store;
