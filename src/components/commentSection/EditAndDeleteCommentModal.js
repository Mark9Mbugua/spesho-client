import React from 'react';
import EditComment from './EditComment';
import DeleteComment from './DeleteComment';
import { EditAndDeleteContainer } from './editAndDeleteComment.styles';

const EditAndDeleteCommentModal = ({ id, content, toggleEditForm, toggleEditModal }) => {
    return (
        <EditAndDeleteContainer>
            <EditComment 
                id={id}
                content={content}
                toggleEditForm={toggleEditForm}
                toggleEditModal={toggleEditModal}
            />
            <DeleteComment />
        </EditAndDeleteContainer>
    )
}

export default EditAndDeleteCommentModal
