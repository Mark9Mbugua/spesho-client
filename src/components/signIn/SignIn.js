import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../common/CustomButton';

const SignIn = ({ toggleMobileNavbar }) => {
    return (
        <Link 
            to='/signin' 
            className='auth'
            onClick={toggleMobileNavbar}
        >
            <CustomButton isSignIn>
                Sign In
            </CustomButton>
        </Link>
    )
}

export default SignIn;