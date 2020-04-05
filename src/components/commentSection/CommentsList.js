import React, { Component } from "react";
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { getComments } from '../../actions/comments';
import { CommentsListContainer } from './commentList.styles';
import CreateCommentModal from './CreateCommentModal';
import { createComment } from '../../actions/comments';
import profileIcon from '../../images/profile-icon.svg';

export class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            modal: false
        };
    }

    componentDidMount() {
        let { objectId } = this.props;
        this.props.getComments(objectId);
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { content } = this.state;  
        let { objectId } = this.props;

        // create comment via createComment action
        this.props.createComment(content, objectId);

        this.toggle()
    
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    render() {
        let { comments } = this.props.comments;
        console.log(comments);
        
        return (
            <CommentsListContainer>
                <CreateCommentModal 
                    id={this.props.objectId}
                    modal={this.state.modal}
                    content={this.state.content}
                    toggle={this.toggle}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
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
    comments: state.comments
});

export default connect(mapStateToProps, { getComments, createComment })
(CommentsList);  