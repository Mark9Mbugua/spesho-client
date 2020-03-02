import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../common/CustomButton';

const SignIn = () => {
    return (
        <Link to='/signin'>
            <CustomButton isSignIn>
                Sign In
            </CustomButton>
        </Link>
    )
}

export default SignIn;