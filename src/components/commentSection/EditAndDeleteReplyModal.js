import React from 'react';
import EditComment from './EditComment';
import DeleteReply from './DeleteReply';
import { EditAndDeleteContainer } from './editAndDeleteComment.styles';

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
