import axios from "axios";
import { returnErrors } from './errors';
import { tokenConfig } from './auth';

import { 
    GET_COMMENTS,
    CREATE_COMMENT,
    CREATE_COMMENT_ERROR,
    EDIT_COMMENT,
    EDIT_COMMENT_ERROR,
    DELETE_COMMENT,
    DELETE_COMMENT_ERROR  
} from "./types";

//get comments
export const getComments = id => dispatch => {
    axios
        .get(`http://127.0.0.1:8000/api/v1/comments/item/?id=${id}`)
        .then(res => {
            dispatch({
                type: GET_COMMENTS,
                payload: res.data.results
            });
        })
        .catch(err => console.log(err));
};

// create a comment
export const createComment = (content, id) => (dispatch, getState) => {
    
  // Request body
    const body = JSON.stringify({ content });
  
    axios
      .post(`http://127.0.0.1:8000/api/v1/comments/create/?type=item&id=${id}`, body, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: CREATE_COMMENT,
          payload: res.data
        }),
      )
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: CREATE_COMMENT_ERROR
        });
      });
};

// edit a comment
export const editComment = (content, id) => (dispatch, getState) => {
    
  // Request body
    const body = JSON.stringify({ content });
  
    axios
      .put(`http://127.0.0.1:8000/api/v1/comments/${id}`, body, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: EDIT_COMMENT,
          payload: res.data
        }),
      )
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: EDIT_COMMENT_ERROR
        });
      });
};

// delete a comment
export const deleteComment = id => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/v1/comments/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_COMMENT,
        payload: id
      }),
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: DELETE_COMMENT_ERROR
      });
    });
};

