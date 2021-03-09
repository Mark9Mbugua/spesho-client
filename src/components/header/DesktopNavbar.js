import React, { Fragment } from 'react';
import { 
    DesktopNavbarContainer,
    Logo,
    LogoLink,
    RightNav,
    AuthButtons, 
    MyMobileNavButton 
} from './desktopNavbar.styles';
import NavLinks from './NavLinks';
import mobileNavIcon from '../../images/mobile-nav-icon.svg';
import SearchBar from './SearchBar';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import ProfileMenu from '../auth/userProfile/ProfileMenu';
import SiteLogo from './SiteLogo';

const DesktopNavbar = props => {
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
            <Logo>
                <LogoLink to="/">Dealie</LogoLink>
            </Logo>  
            <NavLinks />
            <RightNav>
                <SearchBar />
            </RightNav>
            <AuthButtons>
                  {isAuth ? authLinks : guestLinks}  
            </AuthButtons>
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