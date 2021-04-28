import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUserPassword } from '../../../../../redux/actions/auth';
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

class ChangeUserPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
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
        const { oldPassword, newPassword } = this.state       
        
        const old_password = oldPassword;
        const new_password = newPassword;

        const passwords = {
            old_password,
            new_password
        }
        // update phone via changePassword action;
        this.props.changeUserPassword(passwords);

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
                <Button color='dark' onClick={this.toggle}>
                    Change
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Change Password</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for='oldPassword'>Old password</Label>
                                <Input
                                    type='password'
                                    name='oldPassword'
                                    id='oldPassword'
                                    value={this.state.oldPassword}
                                    onChange={this.handleChange}
                                />
                                <Label for='newPassword'>New password</Label>
                                <Input
                                    type='password'
                                    name='newPassword'
                                    id='newPassword'
                                    value={this.state.newPassword}
                                    onChange={this.handleChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }}>
                                    Change Password
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
    success: state.auth.success,
    error: state.errors
});

export default connect(mapStateToProps, { changeUserPassword })(ChangeUserPassword);
