import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyCode } from '../../../../../redux/actions/auth';
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

class VerifyCodeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmationCode: props.confirmation_code,
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
        const { confirmationCode } = this.state;
        const confirmation_code = {confirmation_code: confirmationCode};
        // update phone via verifyCode action
        console.log(confirmation_code);
        this.props.verifyCode(confirmation_code);

        this.toggle();
    
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        //const { getProfile } = this.props;
        //console.log(this.props)
        return (
            <div>
                <Button color='danger' onClick={this.toggle}>
                    Verify Code
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Verify confirmation code</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for='confirmationCode'> Enter confirmation code sent to your phone</Label>
                                <Input
                                    type='text'
                                    name='confirmationCode'
                                    id='confirmationCode'
                                    value={this.state.confirmationCode}
                                    onChange={this.handleChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }}>
                                    Verify Code
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

export default connect(mapStateToProps, { verifyCode })(VerifyCodeModal)
