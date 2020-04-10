import React, { Component } from 'react';
import { EditContainer } from './editComment.styles';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteComment extends Component {
    render() {
        return (
            <EditContainer>
              <p><DeleteIcon className="edit-icon"/>Delete</p>  
            </EditContainer>
        )
    }
}

export default DeleteComment
