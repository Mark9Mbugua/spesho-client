import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import autosize from "autosize";
import { createReply } from '../../actions/comments';
import { CreateReplyFormContainer } from './createReplyForm.styles';


const CreateReplyForm = ({ itemId, parentId, toggleCreateReplyForm, showReplies, createReply } ) => {
    const contentRef = useRef()
    const [content, setContent] = useState('');

    useEffect(() => {
        contentRef.current.focus();
        autosize(contentRef.current);
    });
    
    const handleSubmit = e => {
        e.preventDefault();

        // create reply via createReply action
        createReply(content, itemId, parentId)

        toggleCreateReplyForm(parentId);
        showReplies(parentId);
    
    };

    return (
        <CreateReplyFormContainer>
            <form className="reply-form" onSubmit={handleSubmit}>
                <textarea
                    className="reply-input" 
                    type='textarea'
                    name='content'
                    id='content'
                    ref={contentRef}
                    placeholder="Add a public reply..."
                    rows={1}
                    value={content}
                    onChange={e => setContent(e.target.value)} 
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

export default connect(null, { createReply })(CreateReplyForm);
