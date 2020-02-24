import {  
    GET_ALL_ITEMS,
    GET_ITEM,
    GET_ITEMS_BY_CATEGORY,
    GET_ITEMS_BY_STORE,
    ITEMS_LOADING 
} from "../actions/types.js";

const initialState = {
    items: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ITEMS:
            return {
                ...state,
                items: action.payload
            };

        case GET_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? (item = action.payload)
                        : item
                    )
            };

        case GET_ITEMS_BY_CATEGORY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.category.id === action.payload.category.id
                        ? (item = action.payload)
                        : item
                    )
            };
                
        case GET_ITEMS_BY_STORE:
            return {
                ...state,
                items: state.items.map(item =>
                    item.store.id === action.payload.store.id
                        ? (item = action.payload)
                        : item
                    )
            };
        
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}
