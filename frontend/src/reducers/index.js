import {combineReducers} from 'redux';
import authReducer from './authReducer';
import pinReducer from './pinReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    pin: pinReducer
});


