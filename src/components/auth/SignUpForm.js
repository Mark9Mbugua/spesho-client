import React , {Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../../actions/auth';
import { SignUpFormContainer } from './signUpForm.styles';
import Footer from '../common/Footer';

class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            username: '',
            password: ''
        };
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = e=> {
        e.preventDefault();

        const { email, first_name, last_name, username, password } = this.state;
        //const { isAuthenticated } = this.props;

        // Create user object
        const user = {
            email,
            first_name,
            last_name,
            username,
            password
        };
        
        this.props.register(user); 
        
    };
 
    render(){
        //console.log(this.props)
        return(
            <div>
                <SignUpFormContainer>
                    <form onSubmit={this.handleSubmit} className="FormFields">
                        <h1>Join Dealie</h1>
                        <h4>Find and share great deals</h4>
                        <div className="FormField">
                            <input 
                                type="text" 
                                id="first_name" 
                                className="input" 
                                placeholder="First Name" 
                                name="first_name"  
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="FormField">
                            <input 
                                type="text" 
                                id="last_name" 
                                className="input" 
                                placeholder="Last Name" 
                                name="last_name"  
                                onChange={this.handleChange} 
                            />
                        </div>
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
                                type="email" 
                                id="email" 
                                className="input" 
                                placeholder="Email" 
                                name="email"
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
                        <div className="ButtonField">
                            <button className="FormButton">
                                Sign Up
                            </button> 
                            <Link to="/signin" className="loginLink">I'm already a member</Link>
                        </div>
                    </form>
                    <div className="termsLink">
                        <p>By creating an account, you agree to our <a 
                        href="" className="termsLink">terms of service</a>  and <a 
                        href="" className="termsLink">Privacy Policy</a></p>
                    </div>
                </SignUpFormContainer>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    error: state.errors
});

export default connect(mapStateToProps, { register })(SignUpForm);