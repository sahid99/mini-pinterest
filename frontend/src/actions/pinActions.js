import axios from 'axios';
import { returnErrors } from './errorActions';
import {tokenCheck} from "./authActions";

import {
    GET_PINS
  } from './types';

export const getPins = () => (dispatch, getState) => {
  // dispatch(setItemsLoading());
  axios
    .get('http://localhost:4000/api/pin', tokenCheck(getState))
    .then(res =>
      dispatch({
        type: GET_PINS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};