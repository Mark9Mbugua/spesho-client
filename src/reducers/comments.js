import jwt_decode from 'jwt-decode';
import { 
    GET_COMMENTS,
    GET_COMMENTS_ERROR,
    CREATE_COMMENT,
    CREATE_COMMENT_ERROR,
    EDIT_COMMENT,
    EDIT_COMMENT_ERROR,
    DELETE_COMMENT,
    DELETE_COMMENT_ERROR,
    GET_REPLIES,
    GET_REPLIES_ERROR,
    CREATE_REPLY,
    CREATE_REPLY_ERROR,
    EDIT_REPLY,
    EDIT_REPLY_ERROR,
    DELETE_REPLY,
    DELETE_REPLY_ERROR,

} from "../actions/types.js";

const initialState = {
    comments: [],
    replies: []
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

        case GET_REPLIES:
            return {
                ...state,
                replies: action.payload
            }

        case CREATE_REPLY:
            return {
                ...state,
                replies: [action.payload, ...state.replies]
            };
        
        case EDIT_REPLY:
            return {
                ...state,
                replies: state.replies.map(reply =>
                    reply.id === action.payload.id
                        ? (reply = action.payload)
                        : reply
                    )
            };
        
        case DELETE_REPLY:
            return {
                ...state,
                replies: state.replies.filter(reply => reply.id !== action.payload)
            };
    
        case GET_COMMENTS_ERROR:
        case CREATE_COMMENT_ERROR:
        case EDIT_COMMENT_ERROR:
        case DELETE_COMMENT_ERROR:   
        case GET_REPLIES_ERROR:
        case CREATE_REPLY_ERROR:
        case EDIT_REPLY_ERROR:
        case DELETE_REPLY_ERROR:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}
