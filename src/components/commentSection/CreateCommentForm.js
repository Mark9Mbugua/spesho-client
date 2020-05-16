import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import autosize from "autosize";
import { Alert } from 'reactstrap';
import { createComment } from '../../actions/comments';
import { CreateReplyFormContainer } from './createReplyForm.styles';


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
            <form className="reply-form" onSubmit={handleSubmit}>
                <textarea
                    className="reply-input" 
                    type='textarea'
                    name='content'
                    id='content'
                    ref={contentRef}
                    placeholder="Add a  public comment..."
                    rows={1}
                    defaultValue=""
                    value={content}
                    onChange={e => setContent(e.target.value)} 
                />
                <div className="reply-buttons">
                    <button 
                        className="cancel-button"
                        onClick={e => setContent('')}
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

export default connect(null, { createComment })(CreateCommentForm);

