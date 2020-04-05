import React from 'react';
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

const CreateCommentModal = ({ modal, content, toggle, handleSubmit, handleChange }) => {
    
    return (
        <div>
            <Button color='dark' style={{ marginTop: '2rem' }} onClick={() => toggle()}>
                    Add a comment
            </Button>
            <Modal isOpen={modal} toggle={() => toggle()}>
                <ModalHeader toggle={() => toggle()}>Create Comment</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <Label for='content'>comment</Label>
                            <Input
                                type='textarea'
                                name='content'
                                id='content'
                                value={content}
                                onChange={(e) => handleChange(e)}
                            />
                            <Button color='dark' style={{ marginTop: '2rem' }}>
                                Create comment
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default CreateCommentModal

