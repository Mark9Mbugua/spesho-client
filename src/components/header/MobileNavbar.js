import React, { Fragment } from 'react';
import { 
    MobileNavbarContainer, 
    MenuLink 
} from './mobileNavbar.styles'
import { ItemLink } from '../auth/user-profile/profile-menu/profile-menu.styles';
import MobileNavLinks from './MobileNavLinks';
import SignUp from '../sign-up/sign-up.component';
import SignIn from '../signIn/sign-in.component';
import Logout from '../auth/logout/logout.component';

const MobileNavbar = ({ isAuth, toggleMobileNavbar, displayMobileNavbar }) => {
    const guestLinks = (
        <Fragment>
            <SignIn toggleMobileNavbar={toggleMobileNavbar} />
            <SignUp toggleMobileNavbar={toggleMobileNavbar} />
        </Fragment>
    );

    const authLinks = (
        <Fragment>
            <ItemLink 
                to='/profile'
                onClick={toggleMobileNavbar}
            >
                My Profile
            </ItemLink>
            <Logout toggleMobileNavbar={toggleMobileNavbar} />
        </Fragment>
    );

    return (
        <MobileNavbarContainer displayMobileNavbar={displayMobileNavbar}>
            <MobileNavLinks 
                isMobileLink={true}
                isAuth={isAuth}
                toggleMobileNavbar={toggleMobileNavbar} 
            />
            <div>
                {isAuth ? authLinks : guestLinks}
            </div>
        </MobileNavbarContainer>
    )
}

export default MobileNavbar