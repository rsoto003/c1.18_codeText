import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import sidebarReducer from './sidebar_reducer';

export default combineReducers({
    user:userReducer,
    sidebar:sidebarReducer
})