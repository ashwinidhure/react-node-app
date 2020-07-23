import {combineReducers} from 'redux';
import teamReducer from './teamReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

export default combineReducers({
    users: teamReducer,
    login: authReducer,
    userData: userReducer
})