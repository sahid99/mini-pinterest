import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from './types';

  export const login = ({ email, password }) => (
    dispatch
  ) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ email, password });
  
    axios
      .post('http://localhost:4000/users/signin', body, config)
      .then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        // console.log("Error...");
        dispatch({
          type: LOGIN_FAIL
        });
      });
  };

  export const register = ({ name, email, password, confirm_password }) => (
    dispatch
  ) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ name, email, password, confirm_password });
  
    axios
      .post('http://localhost:4000/users/signup', body, config)
      .then(res =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
        );
        // console.log("Error...");
        dispatch({
          type: REGISTER_FAIL
        });
      });
  };

// Logout User
export const logout = () => {
    return {
      type: LOGOUT_SUCCESS
    };
};

export const tokenCheck = (getState) => {
    // Get token from localstorage
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  
    return config;
  };

  export const getUser = () => (dispatch, getState) =>{
    const userName = getState().auth;
    return userName;
  }
