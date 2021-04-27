import React from 'react';
import EditComment from '../edit-comment/edit-comment.component';
import DeleteComment from '../delete-comment/delete-comment.component';
import { EditAndDeleteContainer } from './edit-and-delete-comment.styles';

const EditAndDeleteCommentModal = ({ id, content, toggleEditForm, toggleEditModal }) => {
    return (
        <EditAndDeleteContainer>
            <EditComment 
                id={id}
                content={content}
                toggleEditForm={toggleEditForm}
                toggleEditModal={toggleEditModal}
            />
            <DeleteComment 
                id={id}
            />
        </EditAndDeleteContainer>
    )
}

export default EditAndDeleteCommentModal
