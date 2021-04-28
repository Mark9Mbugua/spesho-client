import React , {Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { register } from '../../../redux/actions/auth';
import { clearErrors } from '../../../redux/actions/errors';
import { 
    SignUpFormContainer,
    MainHeader,
    SubHeader,
    FormInput,
    FormButton,
    AuthLink,
    ButtonFields,
    FormFields,
    Terms 
} from './sign-up-form.styles';
import Footer from '../../common/Footer';

class SignUpForm extends Component{
    state = {
        email: '',
        first_name: '',
        last_name: '',
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

    handleSubmit = e=> {
        e.preventDefault();

        const { email, first_name, last_name, username, password } = this.state;

        // Create user object
        const user = {
            email,
            first_name,
            last_name,
            username,
            password
        };
        // Attempt to register
        if (user.email && user.first_name && user.last_name && user.username && user.password){ 
            this.props.register(user);
        }
    };
 
    render(){
        const { isAuthenticated, error }  = this.props;
        if(isAuthenticated){
            return <Redirect to="/" />
        }

        return(
            <div>
                <SignUpFormContainer>
                    <FormFields onSubmit={this.handleSubmit}>
                        <MainHeader>Join Dealie</MainHeader>
                        <SubHeader>Find and share great deals</SubHeader>
                        <FormInput 
                            type="text" 
                            id="first_name"  
                            placeholder="First Name" 
                            name="first_name"  
                            onChange={this.handleChange}
                            required 
                        />
                        <FormInput 
                            type="text" 
                            id="last_name"  
                            placeholder="Last Name" 
                            name="last_name"  
                            onChange={this.handleChange}
                            required 
                        />
                        <FormInput 
                            type="text" 
                            id="username"  
                            placeholder="Username" 
                            name="username"  
                            onChange={this.handleChange}
                            required 
                        />
                        {error.msg.username ?
                            <Alert color="danger">
                                <span>Username: {error.msg.username}</span>
                            </Alert>
                            : null
                        } 
                        <FormInput 
                            type="email" 
                            id="email"  
                            placeholder="Email" 
                            name="email"
                            onChange={this.handleChange}
                            required 
                        />
                        {error.msg.email ?
                            <Alert color="danger">
                                <span>Email: {error.msg.email}</span>
                            </Alert>
                            : null
                        }
                        <FormInput 
                            type="password" 
                            id="password"  
                            placeholder="Password" 
                            name="password" 
                            onChange={this.handleChange}
                            required 
                        />
                        {error.msg.password ?
                            <Alert color="danger">
                                <span>Password: {error.msg.password}</span>
                            </Alert>
                            :null
                        }
                        <ButtonFields>
                            <FormButton>
                                Sign Up
                            </FormButton> 
                            <AuthLink to="/signin">I'm already a member</AuthLink>
                        </ButtonFields>
                    </FormFields>
                    <Terms>
                        <p>
                            By creating an account, you agree to our
                            <a href=""> terms of service </a> 
                            and 
                            <a href=""> privacy Policy</a>
                        </p>
                    </Terms>
                </SignUpFormContainer>
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

export default connect(mapStateToProps, { register, clearErrors })(SignUpForm);