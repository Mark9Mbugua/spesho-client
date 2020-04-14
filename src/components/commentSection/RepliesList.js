import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReplies } from '../../actions/comments';
import { Link } from 'react-router-dom';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import profileIcon from '../../images/profile-icon.svg';
import { RepliesListContainer } from './repliesList.styles';


class RepliesList extends Component {
    componentDidMount() {
        let { id } = this.props;
        this.props.getReplies(id);
    };


    render() {
        const { replies, parentId } = this.props;
        //console.log(replies);
        return (
            <RepliesListContainer>
                {replies.map(reply => (
                    <div key={reply.id} className="reply-main">
                        <div className="reply-user-details">
                            <div className="reply-user-icon">
                                <img src={profileIcon} alt="logo icon" />
                            </div>
                            <div className="reply-user-info">
                                <p className="reply-username">{reply.user.username}</p>
                                <p className="reply-date-joined">Joined {reply.user.created_on}</p>
                            </div> 
                        </div>
                        <div className="reply-comment-details">
                            <p className="reply-date-created">{reply.created_on}</p>
                            <p>{reply.content}</p>
                            <div className="reply-comment-reaction">
                                <p><ThumbUpAltOutlinedIcon /> {reply.likes_count}</p>
                                <div className="reply-vl"></div>
                                <p><ThumbDownAltOutlinedIcon /> {reply.dislikes_count}</p>
                            </div>          
                        </div>
                        <div className="reply-more-icon">
                            <MoreVertIcon />
                        </div>
                    </div>
                ))}
            </RepliesListContainer>
        );
    }
}

const mapStateToProps = state => ({
    replies: state.comments.replies
});

export default connect(mapStateToProps, { getReplies })(RepliesList); 
