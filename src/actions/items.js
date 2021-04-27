import axios from "axios";

import { 
    GET_ITEMS_BY_CATEGORY,
    GET_ITEMS_BY_STORE, 
    GET_ALL_ITEMS,
    GET_ITEM,
    ITEMS_LOADING 
 } from "./types";

//get items by category
export const getItemsByCategory = id => dispatch => {
    let url = `http://127.0.0.1:8000/api/v1/items/category/${id}/`;
    axios
        .get(url)
        .then(res => {
            dispatch({
                type: GET_ITEMS_BY_CATEGORY,
                payload: res.data               
            });
        })
        .catch(err => console.log(err));
};

//get items per store
export const getItemsByStore = id => dispatch => {
    let url = `http://127.0.0.1:8000/api/v1/items/store/${id}/`;
    axios
        .get(url)
        .then(res => {
            dispatch({
                type: GET_ITEMS_BY_STORE,
                payload: res.data               
            });
        })
        .catch(err => console.log(err));
}; 

//get all items
export const getAllItems = () => dispatch => {
    let url = 'http://127.0.0.1:8000/api/v1/items/';
    axios
        .get(url)
        .then(res => {
            dispatch({
                type: GET_ALL_ITEMS,
                payload: res.data               
            });
        })
        .catch(err => console.log(err));
};

//get specific item
export const getItem = id => dispatch => {
    let url = `http://127.0.0.1:8000/api/v1/items/${id}/`;
    axios
        .get(url)
        .then(res => {
            dispatch({
                type: GET_ITEM,
                payload: res.data               
            });
        })
        .catch(err => console.log(err));
};

//when items are loading from the backend
export const setItemsLoading = () => {
    return {
      type: ITEMS_LOADING
    };
  };