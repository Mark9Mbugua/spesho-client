import axios from "axios";

import { GET_STORES } from "./types";

//get stores
export const getStores = () => dispatch => {
    axios
        .get('http://127.0.0.1:8000/api/specials/stores/')
        .then(res => {
            dispatch({
                type: GET_STORES,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}; 