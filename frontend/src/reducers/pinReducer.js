import {
    GET_PINS, SAVE_PIN, SEARCH_PINS, GET_BOARDS
  } from '../actions/types';

const initialState = {
    boardName: null,
    boards: null,
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
                pins: action.payload.pins,
                search: action.payload.search
            };
        case GET_BOARDS:
            return{
                ...state,
                boards: action.payload.boards
            }
        default:
            return state;
    }
}