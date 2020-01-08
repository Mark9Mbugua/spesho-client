import { 
    GET_ITEMS_BY_CATEGORY, 
    GET_ALL_ITEMS,
    GET_ITEMS_BY_STORE 
} from "../actions/types.js";

const initialState = {
    items: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ITEMS:
            return {
                ...state,
                items: action.payload
            };

        case GET_ITEMS_BY_CATEGORY:
            return {
                ...state,
                items: action.payload
            };
                
        case GET_ITEMS_BY_STORE:
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
}
