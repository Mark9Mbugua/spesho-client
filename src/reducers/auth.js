import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADING
} from '../actions/types';
  
const initialState = {
    token: null,
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
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          user: action.payload
        };
      default:
        return state;
    }
};