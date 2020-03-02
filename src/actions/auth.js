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
    USER_LOADED 
} from './types';


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
