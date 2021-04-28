import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import ArrowDropUpTwoToneIcon from '@material-ui/icons/ArrowDropUpTwoTone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getComments } from '../../../redux/actions/comments';
import CreateLikeVote from '../../votes-section/create-dislike-vote/create-dislike-vote';
import CreateDislikeVote from '../../votes-section/create-like-vote/create-like-vote.component';
import { getItemVotes } from '../../../redux/actions/votes';
import { 
    CommentsListContainer,
    MainSection,
    UserDetails,
    UserIcon,
    UserInfo,
    Username,
    Date,
    CommentDetails,
    CommentReaction,
    EditForm,
    Votes,
    ViewReplies,
    VL,
    MoreIcon
} from './comments-list.styles';
import CreateCommentForm from '../create-comment-form/create-comment-form.component';
import profileIcon from '../../../images/profile-icon.svg';
import EditAndDeleteCommentModal from '../edit-and-delete-comment-modal/edit-and-delete-comment-modal.component';
import RepliesList from '../replies-list/replies-list.component';
import CreateReplyForm from '../create-reply-form/create-reply-form.component';

const CommentsList = ({id, getComments, objectId, comments, user, isAuthenticated, votes, getItemVotes}) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [clickedComment, setClickedComment] = useState(null);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [showCreateReplyForm, setShowCreateReplyForm] = useState(false);

    useEffect(() => {
        getComments(objectId);
    }, [votes]);

    // useEffect(() => {
    //     commentVotes = comments.map(comment => getItemVotes(comment.id));
    // }, []);

    const toggleEditModal = clickedId => {
        setShowEditModal(!showEditModal);
        setClickedComment(clickedId);
    }

    const toggleEditForm = clickedId => {
        setShowEditForm(!showEditForm);
        setClickedComment(clickedId);
    }

    const toggleReplies = clickedId => {
        setShowReplies(!showReplies);
        setClickedComment(clickedId);
    }

    const toggleCreateReplyForm = clickedId => {
        setShowCreateReplyForm(!showCreateReplyForm);
        setClickedComment(clickedId);
    }

    const showCommentReplies = clickedId => {
        setShowReplies(true);
        setClickedComment(clickedId);
    }
    return (
        <CommentsListContainer>
            {isAuthenticated ? 
                <CreateCommentForm
                    className='create-comment'  
                    id={objectId}
                />
                :
                <Alert color="info"><Link to="/signin">Sign in</Link> to add a comment</Alert>
            }
            <hr />
            <div className="comments-header">
                <h2>{comments.length} Comments</h2>
            </div>
            {comments.map(comment => (
                <MainSection key={comment.id}>
                    <UserDetails className='user-details'>
                        <UserIcon>
                            <img src={profileIcon} alt="logo icon" />
                        </UserIcon>
                        <UserInfo>
                            <Username>{comment.user.username}</Username>
                            <Date>Joined {comment.user.created_on}</Date>
                        </UserInfo> 
                    </UserDetails>
                    <CommentDetails className='comment-details'>
                        <Date>{comment.created_on}</Date>
                        { showEditForm && clickedComment === comment.id ?
                            <EditForm 
                                id={comment.id}
                                content={comment.content}
                                toggleEditForm={this.toggleEditForm} 
                            />
                            : <p>{comment.content}</p> 
                        }
                        <CommentReaction>
                            {isAuthenticated ?
                                <Link 
                                    to="#" 
                                    onClick={() => toggleCreateReplyForm(comment.id)}>
                                    Reply
                                </Link>
                                :
                                <Link to="/signin">Sign in to reply</Link>
                            }
                            { showCreateReplyForm && clickedComment === comment.id ?
                                <CreateReplyForm
                                    className="add-reply"
                                    itemId={objectId}
                                    parentId={comment.id}
                                    toggleCreateReplyForm={toggleCreateReplyForm}
                                    showCommentReplies={showCommentReplies} 
                                />
                                :  
                                <Votes>
                                    <p>Helpful Comment?</p>
                                    <span>
                                        <CreateDislikeVote 
                                            id={comment.id}
                                            modelType='comment'
                                            votes={votes}
                                            dislikes={comment.dislikes_count}
                                            likes={comment.likes_count}
                                        />
                                    </span>
                                    <VL />
                                    <span>
                                        <CreateLikeVote 
                                            id={comment.id}
                                            modelType='comment'
                                            votes={votes}
                                            likes={comment.likes_count}
                                            dislikes={comment.dislikes_count}
                                        />
                                    </span>
                                </Votes>     
                            }
                            
                        </CommentReaction>
                        <div className="replies-section">
                            { comment.reply_count ?
                                <ViewReplies 
                                    to="#"
                                    onClick={() => toggleReplies(comment.id)}
                                >  
                                    { showReplies && clickedComment === comment.id ?
                                        <span><ArrowDropUpTwoToneIcon /> Hide</span> 
                                    : <span><ArrowDropDownTwoToneIcon /> View</span> 
                                    } {comment.reply_count} replies
                                </ViewReplies>
                            : null }
                            { showReplies && clickedComment === comment.id ?
                                <RepliesList
                                    id={comment.id}
                                    parentId={objectId}
                                    showEditModal={showEditModal}
                                    toggleEditForm={toggleEditForm}
                                    toggleEditModal={toggleEditModal}
                                    clickedComment={clickedComment}
                                    user={user}
                                />
                            : null }
                        </div>            
                    </CommentDetails>
                    { user && user.username == comment.user.username ?
                        <MoreIcon className="more-icon">
                            <MoreVertIcon onClick={() => toggleEditModal(comment.id)}/>
                            { showEditModal && clickedComment === comment.id ? 
                                <EditAndDeleteCommentModal 
                                    id={comment.id}
                                    content={comment.content}
                                    toggleEditForm={toggleEditForm}
                                    toggleEditModal={toggleEditModal}
                                /> 
                            : null }
                        </MoreIcon>
                    : null }
                </MainSection>
            ))}
        </CommentsListContainer>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    comments: state.comments.comments,
    votes: state.votes.votes
});

export default connect(mapStateToProps, { getComments, getItemVotes })(CommentsList);
