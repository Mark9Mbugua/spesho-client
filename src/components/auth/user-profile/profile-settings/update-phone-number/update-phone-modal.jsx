import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePhoneNumber } from '../../../../../redux/actions/auth';
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

class UpdatePhoneModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: props.phone_number,
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
        let { phone } = this.state;  
        let phone_number = {phone_number: phone};
        
        // update phone via updatePhoneNumber action
        console.log(phone_number);
        this.props.updatePhoneNumber(phone_number);

        this.toggle();
    
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <EditIcon onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Update Phone Number</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for='phone'>Phone</Label>
                                <Input
                                    type='text'
                                    name='phone'
                                    id='phone'
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }}>
                                    Update Phone Number
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

export default connect(mapStateToProps, { updatePhoneNumber })(UpdatePhoneModal)
