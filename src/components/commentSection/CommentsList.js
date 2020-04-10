import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getComments } from '../../actions/comments';
import { CommentsListContainer } from './commentList.styles';
import CreateCommentModal from './CreateCommentModal';
import profileIcon from '../../images/profile-icon.svg';
import EditAndDeleteCommentModal from './EditAndDeleteCommentModal';
import EditCommentForm from './EditCommentForm';

export class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
            clickedComment: null,
            showEditForm: false
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

    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    render() {
        let { comments } = this.props.comments;
        const { showEditModal, clickedComment, showEditForm } = this.state;
        console.log(comments);
        
        return (
            <CommentsListContainer>
                <CreateCommentModal 
                    id={this.props.objectId}
                />
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
                            : <p>{comment.content}</p> }
                            <div className="comment-reaction">
                                <Link to="#">Reply</Link>
                                <p>Helpful Comment?</p>
                                <p><ThumbUpAltOutlinedIcon /> {comment.likes_count}</p>
                                <div className="vl"></div>
                                <p><ThumbDownAltOutlinedIcon /> {comment.dislikes_count}</p>
                            </div>            
                        </div>
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
                    </div>
                ))}
            </CommentsListContainer>
        );    
    }
}

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(mapStateToProps, { getComments })(CommentsList);  