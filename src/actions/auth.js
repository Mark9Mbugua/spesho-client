import axios from 'axios';
import { returnErrors } from './errors';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
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
        .post('http://localhost:8000/api/v1/accounts/signup/', body, config)
        .then(res =>
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => console.log(err.response.data));
};
