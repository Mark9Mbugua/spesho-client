import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import ArrowDropUpTwoToneIcon from '@material-ui/icons/ArrowDropUpTwoTone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getComments } from '../../actions/comments';
import { CommentsListContainer } from './commentList.styles';
import CreateCommentForm from './CreateCommentForm';
import profileIcon from '../../images/profile-icon.svg';
import EditAndDeleteCommentModal from './EditAndDeleteCommentModal';
import EditCommentForm from './EditCommentForm';
import RepliesList from './RepliesList';
import CreateReplyForm from './CreateReplyForm';

export class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
            clickedComment: null,
            showEditForm: false,
            showReplies: false,
            showCreateReplyForm: false  
        };
    }

    componentDidMount() {
        let { objectId } = this.props;
        this.props.getComments(objectId);
    };

    toggleEditModal = clickedId => {
        this.setState({
            showEditModal: !this.state.showEditModal,
            clickedComment: clickedId
        });
    }

    toggleEditForm = clickedId => {
        this.setState({
            showEditForm: !this.state.showEditForm,
            clickedComment: clickedId
        });
    }

    toggleReplies = clickedId => {
        this.setState({
            showReplies: !this.state.showReplies,
            clickedComment: clickedId
        });
    }

    toggleCreateReplyForm = clickedId => {
        this.setState({
            showCreateReplyForm: !this.state.showCreateReplyForm,
            clickedComment: clickedId
        });
    }

    showReplies = clickedId => {
        this.setState({
            showReplies: true,
            clickedComment: clickedId
        });
    }

    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    render() {
        const { comments, objectId, user, isAuthenticated} = this.props;
        //console.log(user);
        const { showEditModal, clickedComment, showEditForm, showReplies, showCreateReplyForm } = this.state;
        
        return (
            <CommentsListContainer>
                {isAuthenticated ? 
                    <CreateCommentForm 
                        id={this.props.objectId}
                    />
                    :
                    <Alert color="info"><Link to="/signin">Sign in</Link> to add a comment</Alert>
                }
                <hr />
                <div className="comments-header">
                    <h2>{comments.length} Comments</h2>
                </div>
                {comments.map(comment => (
                    <div key={comment.id} className="main">
                        <div className="user-details">
                            <div className="user-icon">
                                <img src={profileIcon} alt="logo icon" />
                            </div>
                            <div className="user-info">
                                <p className="username">{comment.user.username}</p>
                                <p className="date-joined">Joined {comment.user.created_on}</p>
                            </div> 
                        </div>
                        <div className="comment-details">
                            <p className="date-created">{comment.created_on}</p>
                            { showEditForm && clickedComment === comment.id ?
                                <EditCommentForm 
                                    id={comment.id}
                                    content={comment.content}
                                    toggleEditForm={this.toggleEditForm} 
                                />
                                : <p>{comment.content}</p> 
                            }
                            <div className="comment-reaction">
                                {isAuthenticated ?
                                    <Link to="#" onClick={() => this.toggleCreateReplyForm(comment.id)}>Reply</Link>
                                    :
                                    <Link to="/signin">Sign in to reply</Link>
                                }
                                { showCreateReplyForm && clickedComment === comment.id ?
                                    <CreateReplyForm
                                        className="add-reply"
                                        itemId={objectId}
                                        parentId={comment.id}
                                        toggleCreateReplyForm={this.toggleCreateReplyForm}
                                        showReplies={this.showReplies} 
                                    />
                                    :  
                                    <div className="votes">
                                        <p>Helpful Comment?</p>
                                        <p><ThumbUpAltOutlinedIcon /> {comment.likes_count}</p>
                                        <div className="vl"></div>
                                        <p><ThumbDownAltOutlinedIcon /> {comment.dislikes_count}</p>
                                    </div>     
                                }
                                
                            </div>
                            { comment.reply_count ?
                                <Link 
                                    to="#" 
                                    className="view-replies"
                                    onClick={() => this.toggleReplies(comment.id)}
                                >  
                                    { showReplies && clickedComment === comment.id ?
                                        <span><ArrowDropUpTwoToneIcon /> Hide</span> 
                                    : <span><ArrowDropDownTwoToneIcon /> View</span> 
                                    } {comment.reply_count} replies
                                </Link>
                            : null }
                            { showReplies && clickedComment === comment.id ?
                                <RepliesList
                                    className="replies-section"
                                    id={comment.id}
                                    parentId={objectId}
                                    showEditModal={showEditModal}
                                    toggleEditForm={this.toggleEditForm}
                                    toggleEditModal={this.toggleEditModal}
                                    clickedComment={clickedComment}
                                    user={user}
                                />
                            : null }            
                        </div>
                        { user && user.username == comment.user.username ?
                            <div className="more-icon">
                                <MoreVertIcon onClick={() => this.toggleEditModal(comment.id)}/>
                                { showEditModal && clickedComment === comment.id ? 
                                    <EditAndDeleteCommentModal 
                                        id={comment.id}
                                        content={comment.content}
                                        toggleEditForm={this.toggleEditForm}
                                        toggleEditModal={this.toggleEditModal}
                                    /> 
                                : null }
                            </div>
                        : null }
                    </div>
                ))}
            </CommentsListContainer>
        );    
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    comments: state.comments.comments
});

export default connect(mapStateToProps, { getComments })(CommentsList);  