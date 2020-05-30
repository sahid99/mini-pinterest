const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return true;
        default:
            return state;
    }
}

export default loggedReducer;

import {SIGNIN_SUCCESS, SIGNUP_SUCCESS} from '../actions/types';

const initState = {
    token: null,
    auth: false
}

const authentication = (state = initState, action) => {
    switch(action.type){
        case SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS:
            return {
                token: action.payload,
                auth: true
            };
        default:
            return state;
    }
}

export default authentication;