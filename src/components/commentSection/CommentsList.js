import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { getComments } from '../../actions/comments';
import { CommentsListContainer } from './commentList.styles';
import profileIcon from '../../images/profile-icon.svg';

export class CommentsList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getComments();
    };

    render() {
        let { comments } = this.props;
        comments = comments
            .filter(comment => comment.object_id === this.props.objectId)
            .filter(comment => comment.parent === null)
        console.log(comments)
        let user = comments.map(comment => comment.user)
        console.log(user)

        
        return (
            <CommentsListContainer>
                <div className="comments-header">
                    <h2>{this.props.commentsCount} Comments</h2>
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
                            <p>{comment.content}</p>
                            <div className="comment-reaction">
                                <Link to="#">Reply</Link>
                                <p>Helpful Comment?</p>
                                <p><ThumbUpAltOutlinedIcon /> {comment.likes_count}</p>
                                <div className="vl"></div>
                                <p><ThumbDownAltOutlinedIcon /> {comment.dislikes_count}</p>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </CommentsListContainer>
        );    
    }
}

const mapStateToProps = state => ({
    comments: state.comments.comments
});

export default connect(mapStateToProps, { getComments })
(CommentsList);  