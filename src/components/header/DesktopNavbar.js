import React from 'react';
import { DesktopNavbarContainer } from './desktopNavbar.styles';
import { MyMobileNavButton } from './desktopNavbar.styles';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import mobileNavIcon from '../../images/mobile-nav-icon.svg';
import SearchBar from './SearchBar';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import SiteLogo from './SiteLogo';

const DesktopNavbar = props => {
    return (
        <DesktopNavbarContainer>
            <SiteLogo />
            <div className="logo">
                <Link to="/" className="logo-link">Dealie</Link>
            </div>  
            <NavLinks />
            <div className="right-navbar">
                <SearchBar />
                <div className="auth-buttons">
                    <SignIn />
                    <SignUp />
                </div>
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