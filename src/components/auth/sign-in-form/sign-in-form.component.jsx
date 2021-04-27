import React , {Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { login } from '../../../actions/auth';
import { clearErrors } from '../../../actions/errors';
import { SignInFormContainer } from './sign-in-form.styles';
import { 
    SignUpFormContainer,
    MainHeader,
    SubHeader,
    FormInput,
    FormButton,
    AuthLink,
    ButtonFields,
    PasswordReset,
    FormFields,
    Terms
} from '../sign-up-form/sign-up-form.styles';
import Footer from '../../common/Footer';

class SignUpForm extends Component{
    state = {
        username: '',
        password: ''
    };

    componentDidMount(){
        this.props.clearErrors();
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { username, password } = this.state;

        // Sign in user
        const user = {
            username,
            password
        };

        this.props.login(user)
        
    };
 
    render(){
        //console.log(this.props)
        const { isAuthenticated, error }  = this.props;
        if(isAuthenticated){
            return <Redirect to="/" />
        }

        return(
            <div>
                <SignInFormContainer>
                    <SignUpFormContainer>
                        <FormFields onSubmit={this.handleSubmit}>
                            <MainHeader>Sign In</MainHeader>
                            <SubHeader>Enter your details below to continue</SubHeader>
                            {error.msg.non_field_errors ?
                                <Alert color="danger">
                                    {error.msg.non_field_errors}
                                </Alert>
                                :null
                            }
                            <FormInput 
                                type="text" 
                                id="username"  
                                placeholder="Username" 
                                name="username"
                                onChange={this.handleChange} 
                            />
                            {error.msg.username ?
                                <Alert color="danger">
                                    <span>Username: {error.msg.username}</span>
                                </Alert>
                                : null
                            }          
                            <FormInput 
                                type="password" 
                                id="password"  
                                placeholder="Password" 
                                name="password" 
                                onChange={this.handleChange} 
                            />
                            {error.msg.password ?
                                <Alert color="danger">
                                    <span>Password: {error.msg.password}</span>
                                </Alert>
                                : null
                            }         
                            <PasswordReset>
                                <a 
                                    href="http://localhost:8000/api/v1/accounts/reset/password_reset/" 
                                    className="password-link">
                                        Forgot password?
                                </a>
                            </PasswordReset>
                            <ButtonFields>
                                <FormButton>
                                    Sign In
                                </FormButton> 
                                <AuthLink to="/signup">Not a member? Sign Up</AuthLink>
                            </ButtonFields>
                        </FormFields>
                        <Terms>
                            <p>
                                By clicking Sign In, you have read and agree to the
                                <a href=""> Dealie Terms of Service </a> 
                                and 
                                <a href=""> Acceptable Use Policies.</a>
                            </p>
                        </Terms>
                    </SignUpFormContainer>
                </SignInFormContainer>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.errors
});

export default connect(mapStateToProps, { login, clearErrors })(SignUpForm);