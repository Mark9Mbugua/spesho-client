import axios from "axios";

import { GET_COMMENTS } from "./types";

//get stores
export const getComments = () => dispatch => {
    axios
        .get('http://127.0.0.1:8000/api/v1/comments/')
        .then(res => {
            dispatch({
                type: GET_COMMENTS,
                payload: res.data.results
            });
        })
        .catch(err => console.log(err));
}; 