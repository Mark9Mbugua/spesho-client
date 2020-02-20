import axios from "axios";

import { GET_STORE} from "./types";

//get store
export const getStore = id => dispatch => {
    const url = `http://127.0.0.1:8000/api/v1/items/stores/${id}`;
    axios
        .get(url)
        .then(res => {
            dispatch({
                type: GET_STORE,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}; 