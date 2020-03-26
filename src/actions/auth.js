import axios from 'axios';
import { history } from '../helpers/history';
import { returnErrors } from './errors';

import {
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADING,
    USER_LOADED,
    PROFILE_LOADING,
    PROFILE_LOADED,
    UPDATE_PROFILE,
    LOGOUT_SUCCESS 
} from './types';


// Check token & load user
export const loadUserProfile = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });
  
    axios
      .get('http://127.0.0.1:8000/api/v1/accounts/user/profile', tokenConfig(getState))
      .then(res =>
        dispatch({
          type: PROFILE_LOADED,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR
        });
      });
};

//update user profile
export const updateUserProfile = ({bio, avatar, birth_date, gender}) => (dispatch, getState) => {
  // Request body
  const body = JSON.stringify({ bio, avatar, birth_date, gender });

  axios
    .patch('http://127.0.0.1:8000/api/v1/accounts/user/profile', body, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const register = ({ email, first_name, last_name, username, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
        'Content-Type': 'application/json'
        }
    };

    // Request body
    const body = JSON.stringify({ email, first_name, last_name, username, password  });

    axios
        .post('http://127.0.0.1:8000/api/v1/accounts/signup/', body, config)
        .then(res =>
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
                history: history.push('/signin')
            })
        )
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
            );
            dispatch({
                type: REGISTER_FAIL
            });
        })
};

// Login User
export const login = ({ username, password }) => dispatch => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ username, password }); 
  
    axios
        .post('http://127.0.0.1:8000/api/v1/accounts/login/', body, config)
        .then(res =>
            dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
            history: history.push('/')
            }),
            
        )
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        })
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
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
      config.headers['Authorization'] = 'Bearer ' + token;
    }
  
    return config;
};