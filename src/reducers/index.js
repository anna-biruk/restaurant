import reducer from './menuReducer';
import {combineReducers} from 'redux';
import {reducer as modal} from 'redux-modal';
import signInReducer from "./signInReducer";
import orderReducer from "./orderReducer";
import createFormReducer from "./createFormReducer";
import editFormReducer from "./editFormReducer";

export default combineReducers({
    menuReducer: reducer,
    signIn: signInReducer,
    orders: orderReducer,
    createForm: createFormReducer,
    editForm: editFormReducer,
    modal
})
