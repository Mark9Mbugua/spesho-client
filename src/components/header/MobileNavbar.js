import React, { Fragment } from 'react';
import { MobileNavbarContainer } from './mobileNavbar.styles'
import MobileNavLinks from './MobileNavLinks';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import Logout from '../auth/Logout';

const MobileNavbar = props => {
    const { isAuth, user } = props;
    const guestLinks = (
        <Fragment>
            <SignIn toggleMobileNavbar={props.toggleMobileNavbar} />
            <SignUp toggleMobileNavbar={props.toggleMobileNavbar} />
        </Fragment>
    );

    const authLinks = (
        <Fragment>
            <Logout toggleMobileNavbar={props.toggleMobileNavbar} />
        </Fragment>
    );

    return (
        <MobileNavbarContainer displayMobileNavbar={props.displayMobileNavbar}>
            <MobileNavLinks 
                isMobileLink={true}
                isAuth={isAuth}
                toggleMobileNavbar={props.toggleMobileNavbar} 
            />
            <div className="auth-buttons">
                {isAuth ? authLinks : guestLinks}
            </div>
        </MobileNavbarContainer>
    )
}

export default MobileNavbar