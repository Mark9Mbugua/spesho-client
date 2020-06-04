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
} from './commentList.styles';
import CreateCommentForm from './CreateCommentForm';
import profileIcon from '../../images/profile-icon.svg';
import EditAndDeleteCommentModal from './EditAndDeleteCommentModal';
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
                        className='create-comment'  
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
                                        onClick={() => this.toggleCreateReplyForm(comment.id)}>
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
                                        toggleCreateReplyForm={this.toggleCreateReplyForm}
                                        showReplies={this.showReplies} 
                                    />
                                    :  
                                    <Votes>
                                        <p>Helpful Comment?</p>
                                        <span><ThumbUpAltOutlinedIcon /> {comment.likes_count}</span>
                                        <VL />
                                        <span><ThumbDownAltOutlinedIcon /> {comment.dislikes_count}</span>
                                    </Votes>     
                                }
                                
                            </CommentReaction>
                            <div className="replies-section">
                                { comment.reply_count ?
                                    <ViewReplies 
                                        to="#"
                                        onClick={() => this.toggleReplies(comment.id)}
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
                                        toggleEditForm={this.toggleEditForm}
                                        toggleEditModal={this.toggleEditModal}
                                        clickedComment={clickedComment}
                                        user={user}
                                    />
                                : null }
                            </div>            
                        </CommentDetails>
                        { user && user.username == comment.user.username ?
                            <MoreIcon className="more-icon">
                                <MoreVertIcon onClick={() => this.toggleEditModal(comment.id)}/>
                                { showEditModal && clickedComment === comment.id ? 
                                    <EditAndDeleteCommentModal 
                                        id={comment.id}
                                        content={comment.content}
                                        toggleEditForm={this.toggleEditForm}
                                        toggleEditModal={this.toggleEditModal}
                                    /> 
                                : null }
                            </MoreIcon>
                        : null }
                    </MainSection>
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