import axios from "axios";

import { GET_CATEGORY } from "./types";

//get category
export const getCategory = id => dispatch => {
    const url = `http://127.0.0.1:8000/api/specials/categories/${id}`;
    axios
        .get(url)
        .then(res => {
            dispatch({
                type: GET_CATEGORY,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}; 