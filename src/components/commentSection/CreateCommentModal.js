import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { createComment } from '../../actions/comments';

class CreateCommentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            modal: false
        };
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const { content } = this.state;  
        let { id } = this.props;

        // create comment via createComment action
        this.props.createComment(content, id);

        this.toggle()
    
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const { modal, content }  = this.state;
        return (
            <div>
                <Button color='dark' style={{ marginTop: '2rem' }} onClick={this.toggle}>
                        Add a comment
                </Button>
                <Modal isOpen={modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Create Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for='content'>comment</Label>
                                <Input
                                    type='textarea'
                                    name='content'
                                    id='content'
                                    value={content}
                                    onChange={this.handleChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }}>
                                    Create comment
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect(null, { createComment })(CreateCommentModal);  


