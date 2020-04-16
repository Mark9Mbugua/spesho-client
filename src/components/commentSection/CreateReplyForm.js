import React, { Component } from 'react';
import { connect } from 'react-redux';
import autosize from "autosize";
import { createReply } from '../../actions/comments';
import { CreateReplyFormContainer } from './createReplyForm.styles';

class EditCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { content } = this.state;
        const { itemId, parentId, toggleCreateReplyForm, showReplies } = this.props;
        
        // edit comment via createReply action
        this.props.createReply(content, itemId, parentId);

        toggleCreateReplyForm(parentId);
        showReplies(parentId);
    
    };

    render() {
        const { content } = this.state;
        const { toggleCreateReplyForm } = this.props;
        return (
            <CreateReplyFormContainer>
                <form className="reply-form" onSubmit={this.handleSubmit}>
                    <textarea
                        className="reply-input" 
                        type='textarea'
                        name='content'
                        id='content'
                        ref={c => (this.textarea = c)}
                        placeholder="Add a  public reply ..."
                        rows={1}
                        defaultValue=""
                        value={content}
                        onChange={this.handleChange} 
                    />
                    <div className="reply-buttons">
                        <button 
                            className="cancel-button"
                            onClick={toggleCreateReplyForm}
                        >
                            Cancel
                        </button>
                        <div className="divider" />
                        <button 
                            className='reply-button' 
                            type='submit' 
                            value='submit'
                        >
                            Save
                        </button>
                    </div>
                </form>
            </CreateReplyFormContainer>
        )
    }
}

export default connect(null, { createReply })(EditCommentForm);
