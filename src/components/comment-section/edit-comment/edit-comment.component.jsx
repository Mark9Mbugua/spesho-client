import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { EditContainer } from './edit-comment.styles';

const EditComment = ({ id, toggleEditForm, toggleEditModal }) => {
    return (
        <EditContainer>
            <p><EditIcon 
                    className="edit-icon" 
                    onClick={() => { 
                        toggleEditForm(id); 
                    }} 
                />
                Edit
            </p>  
        </EditContainer>
    )
}

export default EditComment

