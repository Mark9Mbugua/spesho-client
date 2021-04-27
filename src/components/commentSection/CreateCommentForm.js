import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import autosize from "autosize";
import { Alert } from 'reactstrap';
import { createComment } from '../../actions/comments';
import { 
    CreateReplyFormContainer,
    ReplyForm,
    ReplyInput,
    ReplyButtons,
    Divider,
    ReplyButton,
    CancelButton
} from './createReplyForm.styles';


const CreateCommentForm = ({ id, createComment }) => {
    const contentRef = useRef()
    const [content, setContent] = useState('');

    useEffect(() => {
        //contentRef.current.focus();
        autosize(contentRef.current);
      });
    
    const handleSubmit = e => {
        e.preventDefault();

        // create comment via createComment action
        createComment(content, id);

        //clear textarea
        setContent('');
    
    };

    return (
        <CreateReplyFormContainer>
            <ReplyForm onSubmit={handleSubmit}>
                <ReplyInput 
                    type='textarea'
                    name='content'
                    id='content'
                    ref={contentRef}
                    placeholder="Add a public comment..."
                    rows={1}
                    value={content}
                    onChange={e => setContent(e.target.value)} 
                />
                <ReplyButtons>
                    <CancelButton 
                        className="cancel-button"
                        onClick={e => setContent('')}
                    >
                        Cancel
                    </CancelButton>
                    <Divider />
                    <ReplyButton 
                        className='reply-button' 
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

export default connect(null, { createComment })(CreateCommentForm);

