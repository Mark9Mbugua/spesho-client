import { 
    GET_COMMENTS,
    CREATE_COMMENT,
    CREATE_COMMENT_ERROR,
    EDIT_COMMENT,
    EDIT_COMMENT_ERROR,
    DELETE_COMMENT,
    DELETE_COMMENT_ERROR
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
        
        case EDIT_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment =>
                    comment.id === action.payload.id
                        ? (comment = action.payload)
                        : comment
                    )
            };
        
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            };

        case EDIT_COMMENT_ERROR:
        case CREATE_COMMENT_ERROR:
            return {
                ...state
            };
        default:
            return state;
    }
}
