import {
    GET_PINS
  } from '../actions/types';

const initialState = {
    boardID: null,
    didGet: false,
    result: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PINS:
            return {
                ...state,
                didGet: true,
                result: action.payload
            };
        default:
            return state;
    }
}