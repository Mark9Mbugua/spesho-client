import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../../../actions/auth';
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
import EditIcon from '@material-ui/icons/Edit';

class UpdateBioModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: props.bio,
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleSubmit = e => {
        e.preventDefault();  
        const bio = {bio: this.state.bio};

        // update bio via updateUser action
        this.props.updateUserProfile(bio);

        this.toggle()
    
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        const { getProfile } = this.props;
        console.log(getProfile)
        return (
            <div>
                <EditIcon onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Update Bio</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for='bio'>Bio</Label>
                                <Input
                                    type='text'
                                    name='bio'
                                    id='bio'
                                    value={this.state.bio}
                                    onChange={this.handleChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }}>
                                    Update Bio
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.auth.profile,
    error: state.errors
});

export default connect(mapStateToProps, { updateUserProfile })(UpdateBioModal)
