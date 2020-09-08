import reducer from './menuReducer';
import {combineReducers} from 'redux';
import {reducer as modal} from 'redux-modal';

export default combineReducers({
    menuReducer:reducer,
    modal
})
