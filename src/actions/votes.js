import axios from "axios";
import { returnErrors } from './errors';
import { tokenConfig } from './auth';

import { 
    GET_VOTES,
    GET_VOTES_ERROR,
    CREATE_VOTE,
    CREATE_VOTE_ERROR,
    DELETE_VOTE,
    DELETE_VOTE_ERROR,
  
} from "./types";

//get votes
export const getVotes = id => dispatch => {
    axios
        .get(`http://127.0.0.1:8000/api/v1/votes/item/?id=${id}`)
        .then(res => {
            dispatch({
                type: GET_VOTES,
                payload: res.data.results
            });
        })
        .catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
          dispatch({
            type: GET_VOTES_ERROR
          });
        });
};

// create an item Vote
export const createItemVote = (id, vote_type) => (dispatch, getState) => {
    
  // Request body
    const body = JSON.stringify({ vote_type });
  
    axios
      .post(`http://127.0.0.1:8000/api/v1/votes/create/?type=item&id=${id}`, body, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: CREATE_VOTE,
          payload: res.data
        }),
      )
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: CREATE_VOTE_ERROR
        });
      });
}

// delete an item vote
export const deleteItemVote = id => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/v1/votes/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_VOTE,
        payload: id
      }),
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: DELETE_VOTE_ERROR
      });
    });
};