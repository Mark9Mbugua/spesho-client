import React, { Fragment } from 'react';
import { MobileNavbarContainer } from './mobileNavbar.styles'
import MobileNavLinks from './MobileNavLinks';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import Logout from '../auth/Logout';

const MobileNavbar = props => {
    const { isAuth, profile } = props;
    const guestLinks = (
        <Fragment>
            <SignIn />
            <SignUp />
        </Fragment>
    );

    const authLinks = (
        <Fragment>
            <p>{profile && profile.user ? `${profile.user.username}` : ''}</p>
            <Logout />
        </Fragment>
    );

    return (
        <MobileNavbarContainer displayMobileNavbar={props.displayMobileNavbar}>
            <MobileNavLinks isMobileLink={true} />
            <div className="auth-buttons">
                {isAuth ? authLinks : guestLinks}
            </div>
        </MobileNavbarContainer>
    )
}

export default MobileNavbar