import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import autosize from "autosize";
import { createReply } from '../../actions/comments';
import { 
    CreateReplyFormContainer,
    ReplyForm,
    ReplyInput,
    ReplyButtons,
    Divider,
    ReplyButton,
    CancelButton
} from './createReplyForm.styles';


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
            <ReplyForm onSubmit={handleSubmit}>
                <ReplyInput
                    type='textarea'
                    name='content'
                    id='content'
                    ref={contentRef}
                    placeholder="Add a public reply..."
                    rows={1}
                    value={content}
                    onChange={e => setContent(e.target.value)} 
                />
                <ReplyButtons>
                    <CancelButton 
                        onClick={toggleCreateReplyForm}
                    >
                        Cancel
                    </CancelButton>
                    <Divider />
                    <ReplyButton  
                        type='submit' 
                        value='submit'
                    >
                        Save
                    </ReplyButton>
                </ReplyButtons>
            </ReplyForm>
        </CreateReplyFormContainer>
    )
}

export default connect(null, { createReply })(CreateReplyForm);
