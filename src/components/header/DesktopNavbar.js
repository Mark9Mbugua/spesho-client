import React, { Fragment } from 'react';
import { DesktopNavbarContainer } from './desktopNavbar.styles';
import { MyMobileNavButton } from './desktopNavbar.styles';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import mobileNavIcon from '../../images/mobile-nav-icon.svg';
import SearchBar from './SearchBar';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import ProfileMenu from '../auth/userProfile/ProfileMenu';
import SiteLogo from './SiteLogo';

const DesktopNavbar = props => {
    //console.log(props);
    const { isAuth, user } = props;

    const guestLinks = (
        <Fragment>
            <SignIn />
            <SignUp />
        </Fragment>
    );

    const authLinks = (
        <Fragment>
            <ProfileMenu 
                isAuth={isAuth}
                user={user}
            />
        </Fragment>
    );

    return (
        <DesktopNavbarContainer>
            <SiteLogo />
            <div className="logo">
                <Link to="/" className="logo-link">Dealie</Link>
            </div>  
            <NavLinks />
            <div className="right-navbar">
                <SearchBar />
            </div>
            <div className="auth-buttons">
                  {isAuth ? authLinks : guestLinks}  
            </div>
            <MyMobileNavButton
                displayMobileNavbar={props.displayMobileNavbar}
                onClick={props.toggleMobileNavbar}
            >
                <img src={mobileNavIcon} alt="nav icon" />
            </MyMobileNavButton>
        </DesktopNavbarContainer>
    )
}

export default DesktopNavbar