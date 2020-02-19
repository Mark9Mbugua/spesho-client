import React from 'react';
import { MobileNavbarContainer } from './mobileNavbar.styles'
import MobileNavLinks from './MobileNavLinks';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';

const MobileNavbar = props => {
    return (
        <MobileNavbarContainer displayMobileNavbar={props.displayMobileNavbar}>
            <MobileNavLinks isMobileLink={true} />
            <div className="auth-buttons">
                <SignIn />
                <SignUp />
            </div>
        </MobileNavbarContainer>
    )
}

export default MobileNavbar