import axios from 'axios';
import { returnErrors } from './errors';

import {
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADING,
    USER_LOADED,
    LOAD_USER_FAILURE,
    PROFILE_LOADING,
    PROFILE_LOADED,
    LOAD_PROFILE_FAILURE,
    UPDATE_PROFILE,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PHONE,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAILURE,
    VERIFY_CODE,
    LOGOUT_SUCCESS 
} from './types';


// Check token & load user
export const loadCurrentUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get('http://127.0.0.1:8000/api/v1/accounts/user/', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOAD_USER_FAILURE
      });
    });
};

// Check token & load user profile
export const loadUserProfile = () => (dispatch, getState) => {
    // User profile loading
    dispatch({ type: PROFILE_LOADING });
  
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
          type: LOAD_PROFILE_FAILURE
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
        type: UPDATE_PROFILE_FAILURE
      });
    });
};

//update user phone number
export const updatePhoneNumber = ({phone_number}) => (dispatch, getState) => {
  // Request body
  const body = JSON.stringify({ phone_number });

  axios
    .patch('http://127.0.0.1:8000/api/v1/accounts/user/update/phone-number', body, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: UPDATE_PHONE,
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

//verify confirmation code
export const verifyCode = ({confirmation_code}) => (dispatch, getState) => {
  // Request body
  const body = JSON.stringify({ confirmation_code });

  axios
    .put('http://127.0.0.1:8000/api/v1/accounts/user/verification-code', body, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: VERIFY_CODE,
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

//change user password
export const changeUserPassword = ({old_password, new_password}) => (dispatch, getState) => {
  // Request body
  const body = JSON.stringify({ old_password, new_password });

  axios
    .put('http://127.0.0.1:8000/api/v1/accounts/user/change-password', body, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CHANGE_PASSWORD_FAILURE
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
                payload: res.data
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
        .post('http://127.0.0.1:8000/accounts/login/', body, config)
        .then(res =>
            dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
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