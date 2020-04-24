import { 
    GET_VOTES,
    GET_VOTES_ERROR,
    CREATE_VOTE,
    CREATE_VOTE_ERROR


} from "../actions/types.js";

const initialState = {
    votes: [],
    user: null,
    voteType: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_VOTES:
            return {
                ...state,
                votes: action.payload
            };

        case CREATE_VOTE:
            return {
                ...state,
                user: action.payload.user,
                voteType: action.payload.vote_type,
                votes: [action.payload, ...state.votes]
            };
        
        case CREATE_VOTE_ERROR:
        case GET_VOTES_ERROR:
            return {
                ...state
            };

        default:
            return state;
    }
}
