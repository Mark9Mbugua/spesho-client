import React , {Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { login } from '../../actions/auth';
import { SignInFormContainer } from './signInForm.styles';
import { SignUpFormContainer } from './signUpForm.styles';
import Footer from '../common/Footer';

class SignUpForm extends Component{
    state = {
        username: '',
        password: ''
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { username, password } = this.state;
        //const { isAuthenticated } = this.props;

        // Sign in user
        const user = {
            username,
            password
        };

        this.props.login(user)
        
    };
 
    render(){
        //console.log(this.props)
        const { isAuthenticated }  = this.props;
        if(isAuthenticated){
            return <Redirect to="/" />
        }

        return(
            <div>
                <SignInFormContainer>
                    <SignUpFormContainer>
                        <form onSubmit={this.handleSubmit} className="FormFields">
                            <h1>Sign In</h1>
                            <h5>Enter your details below to continue</h5>
                            <div className="FormField">
                                <input 
                                    type="text" 
                                    id="username" 
                                    className="input" 
                                    placeholder="Username" 
                                    name="username"
                                    onChange={this.handleChange} 
                                />
                            </div>
                            <div className="FormField">
                                <input 
                                    type="password" 
                                    id="password" 
                                    className="input" 
                                    placeholder="Password" 
                                    name="password" 
                                    onChange={this.handleChange} 
                                />
                            </div>
                            <div className="forgot-password">
                                <a 
                                    href="http://localhost:8000/api/v1/accounts/reset/password_reset/" 
                                    className="password-link">
                                        Forgot password?
                                </a>
                            </div>
                            <div className="ButtonField">
                                <button className="FormButton">
                                    Sign In
                                </button> 
                                <Link to="/signup" className="signupLink">Not a member? Sign Up</Link>
                            </div>
                        </form>
                        <div className="termsLink">
                            <p>By clicking Sign In, you have read and agree to the <a 
                            href="" className="termsLink">Dealie Terms of Service </a>  and <a 
                            href="" className="termsLink">Acceptable Use Policies.</a></p>
                        </div>
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

export default connect(mapStateToProps, { login })(SignUpForm);