import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../common/CustomButton';

const SignUp = () => {
    return (
        <Link to='/signup'>
            <CustomButton isSignUp>
                Sign Up
            </CustomButton>
        </Link>
    )
}

export default SignUp;
