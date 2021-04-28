import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditContainer } from '../edit-comment/edit-comment.styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteComment } from '../../../redux/actions/comments';

class DeleteComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: props.showEditModal
        };
    }

    onDeleteClick = id => {
        this.props.deleteComment(id);
    };

    render() {
        const { id } = this.props;
        console.log(this.props);
        return (
            <EditContainer>
              <p><DeleteIcon className="edit-icon" onClick={this.onDeleteClick.bind(this, id)}/>Delete</p>  
            </EditContainer>
        )
    }
}

export default connect(null, { deleteComment })(DeleteComment);
