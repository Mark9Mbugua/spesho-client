import React, { Fragment, useState } from 'react';

import { 
    DesktopNavbarContainer,
    Logo,
    LogoLink,
    RightNav,
    AuthButtons, 
    MyMobileNavButton,
    SearchResultsModal,
    CloseIcon 
} from './desktopNavbar.styles';
import NavLinks from './NavLinks';
import mobileNavIcon from '../../images/mobile-nav-icon.svg';
import closeIcon from '../../images/close.svg';
import SearchBar from './SearchBar';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import ProfileMenu from '../auth/userProfile/ProfileMenu';
import SiteLogo from './SiteLogo';

const DesktopNavbar = ({isAuth, user, displayMobileNavbar, toggleMobileNavbar}) => {
    const [showSearchResultsModal, setShowSearchResultsModal] = useState(false);
    const openSearchResultsModal = () => setShowSearchResultsModal(true);
    const closeSearchResultsModal = () => setShowSearchResultsModal(false);

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
        <>
            <DesktopNavbarContainer>
                <SiteLogo />
                <Logo>
                    <LogoLink to="/">Dealie</LogoLink>
                </Logo>  
                <NavLinks />
                <RightNav
                    showResultsModal={showSearchResultsModal}
                >
                    <SearchBar 
                        openResultsModal={openSearchResultsModal}
                        showResultsModal={showSearchResultsModal}
                    />
                    {
                        showSearchResultsModal ?                     
                            <CloseIcon 
                                src={closeIcon} 
                                alt="close icon" 
                                onClick={closeSearchResultsModal}
                            />
                        :
                            null
                    }
                </RightNav>
                <AuthButtons showResultsModal={showSearchResultsModal}>
                    {isAuth ? authLinks : guestLinks}  
                </AuthButtons>
                <MyMobileNavButton
                    displayMobileNavbar={displayMobileNavbar}
                    onClick={toggleMobileNavbar}
                >
                    <img src={mobileNavIcon} alt="nav icon" />
                </MyMobileNavButton>
            </DesktopNavbarContainer>
            {
                showSearchResultsModal ?                     
                    <SearchResultsModal>
                        <p>Start typing to search.</p>
                    </SearchResultsModal>
                :
                    null
            }
        </>
    )
}

export default DesktopNavbar