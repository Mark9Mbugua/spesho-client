import jwt_decode from 'jwt-decode';
import {
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADING,
  USER_LOADED 
} from '../actions/types';
  
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};
  
export default function(state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          user: action.payload
        };
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token)
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          token: action.payload.token
        };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
          return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
          };
      default:
        return state;
    }
};