import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReplies } from '../../actions/comments';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import profileIcon from '../../images/profile-icon.svg';
import { RepliesListContainer } from './repliesList.styles';
import EditAndDeleteReplyModal from './EditAndDeleteReplyModal';
import EditReplyForm from './EditReplyForm';


class RepliesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditReplyModal: false,
            clickedComment: null,
            showEditReplyForm: false
        };
    }

    componentDidMount() {
        let { id } = this.props;
        this.props.getReplies(id);
    };

    toggleEditReplyModal = clickedId => {
        this.setState({
            showEditReplyModal: !this.state.showEditReplyModal,
            clickedComment: clickedId
        });
    }

    toggleEditReplyForm = clickedId => {
        this.setState({
            showEditReplyForm: !this.state.showEditReplyForm,
            clickedComment: clickedId
        });
    }

    render() {
        const { replies, user  } = this.props;
        const { showEditReplyModal, showEditReplyForm, clickedComment } = this.state;
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
                            { showEditReplyForm && clickedComment === reply.id ?
                                <EditReplyForm 
                                    id={reply.id}
                                    content={reply.content}
                                    toggleEditForm={this.toggleEditReplyForm} 
                                />
                            : <p>{reply.content}</p> }
                            <div className="reply-comment-reaction">
                                <p><ThumbUpAltOutlinedIcon /> {reply.likes_count}</p>
                                <div className="reply-vl"></div>
                                <p><ThumbDownAltOutlinedIcon /> {reply.dislikes_count}</p>
                            </div>          
                        </div>
                        { user && user.id == reply.user.id ?
                            <div className="reply-more-icon">
                                <MoreVertIcon onClick={() => this.toggleEditReplyModal(reply.id)}/>
                                { showEditReplyModal && clickedComment === reply.id ? 
                                    <EditAndDeleteReplyModal 
                                        id={reply.id}
                                        content={reply.content}
                                        toggleEditForm={this.toggleEditReplyForm}
                                        toggleEditModal={this.toggleEditReplyModal}
                                    /> 
                                : null }
                            </div>
                        : null }
                    </div>
                ))}
            </RepliesListContainer>
        );
    }
}

const mapStateToProps = state => ({
    replies: state.comments.replies,
    user: state.auth.user
});

export default connect(mapStateToProps, { getReplies })(RepliesList); 
