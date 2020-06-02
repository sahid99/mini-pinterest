import axios from 'axios';
import { returnErrors } from './errorActions';
import {tokenCheck} from "./authActions";

import {
    GET_PINS, SAVE_PIN, SEARCH_PINS
  } from './types';

export const getPins = () => (dispatch, getState) => {
  // dispatch(setItemsLoading());
  axios
    .get('http://localhost:4000')
    .then(res => {

      const pins = []
  
      res.data.photos.forEach(pin => {
        pins.push({ 
          api_ID:pin.id, 
          width: pin.width,
          height: pin.height,
          url: pin.src.medium, 
          author: pin.photographer
        });
      });
  
      dispatch({
        type: GET_PINS,
        payload: {pins:pins}
      })
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const savePin = ({api_ID, width, height, url}) => (dispatch, getState) => {
  const body = JSON.stringify({ 
    pin: {api_ID, width, height, url},
    board: {user: getState().auth.user, name: "El nombre chido"}
  });
  axios
    .post("http://localhost:4000/api/board/save", body, tokenCheck(getState))
    .then(res =>
      dispatch({
        type: SAVE_PIN,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const searchPins = (query) => (dispatch, getState) => {
  axios
  .get("http://localhost:4000/api/pin/search/" + query, tokenCheck(getState))
  .then(res => {

    const pins = []

    res.data.photos.forEach(pin => {
      pins.push({ 
        api_ID:pin.id, 
        width: pin.width,
        height: pin.height,
        url: pin.src.medium,
        author: pin.photographer
      });
    });

    dispatch({
      type: SEARCH_PINS,
      payload: {pins:pins, search:true}
    })
  })
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
}