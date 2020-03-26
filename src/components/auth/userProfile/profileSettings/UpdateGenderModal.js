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

class UpdateGenderModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: props.gender,
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
        const gender = {gender: this.state.gender};

        // update gender via updateUser action
        this.props.updateUserProfile(gender);

        this.toggle()
    
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        const { getProfile } = this.props;
        //console.log(this.props)
        return (
            <div>
                <EditIcon onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Update Gender</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for='gender'>Gender</Label>
                                <Input
                                    type='text'
                                    name='gender'
                                    id='gender'
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }}>
                                    Update Gender
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

export default connect(mapStateToProps, { updateUserProfile })(UpdateGenderModal)
