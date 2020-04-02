import jwt_decode from 'jwt-decode';
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
  UPDATE_PHONE,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  VERIFY_CODE,
  LOGOUT_SUCCESS 
} from '../actions/types';
  
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    profile: null,
    success: false
};
  
export default function(state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
      case PROFILE_LOADING:
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
      case PROFILE_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          profile: action.payload
        };     
      case VERIFY_CODE:
      case UPDATE_PHONE:
      case UPDATE_PROFILE:
        return {
            ...state,
            profile: action.payload
        };
      case CHANGE_PASSWORD_SUCCESS:
        return {
            ...state,
            success: true
        };
      case CHANGE_PASSWORD_FAILURE:
        return {
            ...state,
            success: false
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
          token: action.payload.token,
          user: jwt_decode(action.payload.token)
        };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
          localStorage.removeItem('token');
          return {
            ...state,
            token: null,
            user: null,
            profile: null,
            isAuthenticated: false,
            isLoading: false
          };
      default:
        return state;
    }
};