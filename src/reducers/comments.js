import { 
    GET_COMMENTS,
    CREATE_COMMENT,
    CREATE_COMMENT_ERROR
} from "../actions/types.js";

const initialState = {
    comments: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        
        case CREATE_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            };
        case CREATE_COMMENT_ERROR:
            return {
                ...state
            };
        default:
            return state;
    }
}
