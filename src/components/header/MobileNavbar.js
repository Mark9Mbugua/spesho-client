import React from 'react';
import { MobileNavbarContainer } from './mobileNavbar.styles'
import NavLinks from './NavLinks';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';

const MobileNavbar = props => {
    return (
        <MobileNavbarContainer displayMobileNavbar={props.displayMobileNavbar}>
            <NavLinks isMobileLink={true} />
            <div className="auth-buttons">
                <SignIn />
                <SignUp />
            </div>
        </MobileNavbarContainer>
    )
}

export default MobileNavbar