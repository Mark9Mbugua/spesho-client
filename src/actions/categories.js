import axios from "axios";

import { GET_CATEGORIES } from "./types";

//get categories
export const getCategories = () => dispatch => {
    axios
        .get('http://127.0.0.1:8000/api/v1/items/categories/')
        .then(res => {
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
} 