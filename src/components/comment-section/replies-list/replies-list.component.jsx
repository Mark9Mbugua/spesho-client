import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getReplies } from '../../../redux/actions/comments';
import { getItemVotes } from '../../../redux/actions/votes';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import profileIcon from '../../../images/profile-icon.svg';
import { RepliesListContainer } from './replies-list.styles';
import { 
    MainSection,
    UserDetails,
    UserIcon,
    UserInfo,
    Username,
    Date,
    CommentDetails,
    CommentReaction,
    Votes,
    VL,
    MoreIcon
} from '../comment-list/comments-list.styles'; 
import EditAndDeleteReplyModal from '../edit-and-delete-reply-modal/edit-and-delete-reply-modal';
import EditReplyForm from '../edit-reply-form/edit-reply-form.component';
import CreateLikeVote from '../../votes-section/create-dislike-vote/create-dislike-vote';
import CreateDislikeVote from '../../votes-section/create-dislike-vote/create-dislike-vote';


const RepliesList = ({id, getReplies, replies, user, votes}) => {
    const [showEditReplyModal, setShowEditReplyModal] = useState(false);
    const [clickedComment, setClickedComment] = useState(null);
    const [showEditReplyForm, setShowEditReplyForm] = useState(false);

    useEffect(() => {
        getReplies(id);
    }, [votes]);

    const toggleEditReplyModal = clickedId => {
        setShowEditReplyModal(!showEditReplyModal);
        setClickedComment(clickedId);
    }

    const toggleEditReplyForm = clickedId => {
        setShowEditReplyForm(!showEditReplyForm);
        setClickedComment(clickedId);
    }



    return (
        <RepliesListContainer>
            {replies.map(reply => (
                <MainSection key={reply.id}>
                    <UserDetails className='user-details'>
                        <UserIcon>
                            <img src={profileIcon} alt="logo icon" />
                        </UserIcon>
                        <UserInfo>
                            <Username>{reply.user.username}</Username>
                            <Date>Joined {reply.user.created_on}</Date>
                        </UserInfo> 
                    </UserDetails>
                    <CommentDetails className='comment-details'>
                        <Date>{reply.created_on}</Date>
                        { showEditReplyForm && clickedComment === reply.id ?
                            <EditReplyForm 
                                id={reply.id}
                                content={reply.content}
                                toggleEditForm={toggleEditReplyForm} 
                            />
                        : <p>{reply.content}</p> }
                        <CommentReaction>
                            <Votes>
                                <span>
                                    <CreateDislikeVote 
                                        id={reply.id}
                                        modelType='comment'
                                        dislikes={reply.dislikes_count}
                                        likes={reply.likes_count}
                                    />
                                </span>
                                <VL />
                                <span>
                                    <CreateLikeVote 
                                        id={reply.id}
                                        modelType='comment'
                                        likes={reply.likes_count}
                                        dislikes={reply.dislikes_count}
                                    />
                                </span>
                            </Votes>     
                        </CommentReaction>          
                    </CommentDetails>
                    { user && user.username == reply.user.username ?
                        <MoreIcon className="more-icon">
                            <MoreVertIcon onClick={() => toggleEditReplyModal(reply.id)}/>
                            { showEditReplyModal && clickedComment === reply.id ? 
                                <EditAndDeleteReplyModal 
                                    id={reply.id}
                                    content={reply.content}
                                    toggleEditForm={toggleEditReplyForm}
                                    toggleEditModal={toggleEditReplyModal}
                                /> 
                            : null }
                        </MoreIcon>
                    : null }
                </MainSection>
            ))}
        </RepliesListContainer>
    );
}

const mapStateToProps = state => ({
    replies: state.comments.replies,
    votes: state.votes.votes
});

export default connect(mapStateToProps, { getReplies, getItemVotes })(RepliesList);
