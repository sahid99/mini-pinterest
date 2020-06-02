import {
    GET_PINS, SAVE_PIN, SEARCH_PINS
  } from '../actions/types';

const initialState = {
    board: null,
    pins: null,
    search: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PINS:
            return {
                ...state,
                pins: action.payload.pins
            };
        case SAVE_PIN:
            return {
                ...state
            };
        case SEARCH_PINS:
            return{
                ...state,
                search: action.payload.search
            };
        default:
            return state;
    }
}