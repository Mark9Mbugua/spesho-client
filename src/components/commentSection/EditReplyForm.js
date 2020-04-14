import React, { Component } from 'react';
import { connect } from 'react-redux';
import autosize from "autosize";
import { editReply } from '../../actions/comments';
import { EditCommentFormContainer } from './editCommentForm.styles';

class EditReplyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            id: props.id
        };
    }

    componentDidMount() {
        this.textarea.focus();
        this.textarea.setSelectionRange(this.textarea.value.length, this.textarea.value.length);
        autosize(this.textarea);
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { content, id } = this.state;
        const { toggleEditForm } = this.props;
        
        // edit comment via editComment action
        this.props.editReply(content, id);

        toggleEditForm();
    
    };

    render() {
        const { content } = this.state;
        const { toggleEditForm } = this.props;
        return (
            <EditCommentFormContainer>
                <form className="edit-form" onSubmit={this.handleSubmit}>
                    <textarea
                        className="edit-input" 
                        type='textarea'
                        name='content'
                        id='content'
                        ref={c => (this.textarea = c)}
                        placeholder="type some text"
                        rows={1}
                        defaultValue=""
                        value={content}
                        onChange={this.handleChange} 
                    />
                    <div className="edit-buttons">
                        <button 
                            className="cancel-button"
                            onClick={toggleEditForm}
                        >
                            Cancel
                        </button>
                        <div className="divider" />
                        <button 
                            className='edit-button' 
                            type='submit' 
                            value='submit'
                        >
                            Save
                        </button>
                    </div>
                </form>
            </EditCommentFormContainer>
        )
    }
}

export default connect(null, { editReply })(EditReplyForm);
