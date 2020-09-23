import reducer from './menuReducer';
import {combineReducers} from 'redux';
import {reducer as modal} from 'redux-modal';
import signInReducer from "./signInReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
    menuReducer: reducer,
    signIn: signInReducer,
    orders:orderReducer,
    modal
})
