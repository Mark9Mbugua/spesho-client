import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EditCommentForm from '../edit-comment-form/edit-comment-form.component';

export const CommentsListContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    padding: 15px 15px 15px 30px;
`;

export const MainSection = styled.div`
    display: grid;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 15px;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas:
        'user-details comment-details more-icon';

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'more-icon'
            'user-details' 
            'comment-details';
    }
`;

export const UserDetails = styled.div`
    grid-area: user-details;
    display: flex;
    flex-flow: row wrap;
`;

export const UserIcon = styled.div`
    margin-bottom: auto;
    width: 70px;
    height: 70px;
    justify-content: center; 
    img {
        width:90%;
        height: 90%;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

export const Username = styled.p`
    font-weight: bold;
`;

export const Date = styled.p`
    color: grey;
`;

export const CommentDetails = styled.div`
    grid-area: comment-details;
    display: flex;
    margin-right: auto;
    flex: 2;
    flex-flow: column wrap;
`;

export const EditForm = styled(EditCommentForm)`
    width: 450px;
`;

export const CommentReaction = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

export const Votes = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
    p {
        color: grey;
        padding: 0 5px 0 20px;
    }

    span {
        color: grey;
        padding: 0 5px;
        margin: 0;
    }
`;

export const ViewReplies = styled(Link)`
    text-decoration: none;                    
    &:focus {
        cursor: pointer;
    }
`;

export const VL = styled.div`
    border-left: 1px solid #cccccc;
    margin-bottom: 5%;
`;

export const MoreIcon = styled.div`
    grid-area: more-icon;
    margin-left: auto;
    padding-top: 35px;

    @media (max-width: 480px) {
        padding-top: 0;
    }
`;