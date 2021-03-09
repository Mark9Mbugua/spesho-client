import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditContainer } from './editComment.styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteReply } from '../../actions/comments';

class DeleteReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: props.showEditModal
        };
    }

    onDeleteClick = id => {
        this.props.deleteReply(id);
    };

    render() {
        const { id } = this.props;
        console.log(id);
        return (
            <EditContainer>
              <p><DeleteIcon className="edit-icon" onClick={this.onDeleteClick.bind(this, id)}/>Delete</p>  
            </EditContainer>
        )
    }
}

export default connect(null, { deleteReply })(DeleteReply);
