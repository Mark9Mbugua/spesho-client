import React , {Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { register } from '../../actions/auth';
import { clearErrors } from '../../actions/errors';
import { SignUpFormContainer } from './signUpForm.styles';
import Footer from '../common/Footer';

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
                                required 
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
                                required 
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
                                required 
                            />
                        </div>
                        {error.msg.username ?
                            <Alert color="danger">
                                <span>Username: {error.msg.username}</span>
                            </Alert>
                            : null
                        } 
                        <div className="FormField">
                            <input 
                                type="email" 
                                id="email" 
                                className="input" 
                                placeholder="Email" 
                                name="email"
                                onChange={this.handleChange}
                                required 
                            />
                        </div>
                        {error.msg.email ?
                            <Alert color="danger">
                                <span>Email: {error.msg.email}</span>
                            </Alert>
                            : null
                        }
                        <div className="FormField">
                            <input 
                                type="password" 
                                id="password" 
                                className="input" 
                                placeholder="Password" 
                                name="password" 
                                onChange={this.handleChange}
                                required 
                            />
                        </div>
                        {error.msg.password ?
                            <Alert color="danger">
                                <span>Password: {error.msg.password}</span>
                            </Alert>
                            :null
                        }
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
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.errors
});

export default connect(mapStateToProps, { register, clearErrors })(SignUpForm);