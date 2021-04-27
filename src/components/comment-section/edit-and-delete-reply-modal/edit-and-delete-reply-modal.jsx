import React from 'react';
import EditComment from '../edit-comment/edit-comment.component';
import DeleteReply from '../delete-reply/delete-reply.component';
import { EditAndDeleteContainer } from '../edit-and-delete-comment-modal/edit-and-delete-comment.styles';

const EditAndDeleteReplyModal = ({ id, content, toggleEditForm, toggleEditModal }) => {
    return (
        <EditAndDeleteContainer>
            <EditComment 
                id={id}
                content={content}
                toggleEditForm={toggleEditForm}
                toggleEditModal={toggleEditModal}
            />
            <DeleteReply 
                id={id}
            />
        </EditAndDeleteContainer>
    )
}

export default EditAndDeleteReplyModal
