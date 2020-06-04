import React from 'react';
import { EditCommentFormContainer } from './editCommentForm.styles';

const CommonEditForm = ({ handleSubmit,contentRef,content, setContent, toggleEditForm}) => {
    return (
        <EditCommentFormContainer>
            <form className="edit-form" onSubmit={handleSubmit}>
                <textarea
                    className="edit-input" 
                    type='textarea'
                    name='content'
                    id='content'
                    ref={contentRef}
                    placeholder="Edit current comment..."
                    rows={1}
                    value={content}
                    onChange={e => setContent(e.target.value)} 
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
    );
}

export default CommonEditForm
