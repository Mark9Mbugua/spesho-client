import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../common/CustomButton';

const SignUp = ({ toggleMobileNavbar }) => {
    return (
        <Link 
            to='/signup' 
            className='auth'
            onClick={toggleMobileNavbar}
        >
            <CustomButton isSignUp>
                Sign Up
            </CustomButton>
        </Link>
    )
}

export default SignUp;
