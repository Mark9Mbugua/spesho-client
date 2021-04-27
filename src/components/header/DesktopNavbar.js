import React, { Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';

import { getAllItems } from '../../actions/items';

import { 
    DesktopNavbarContainer,
    Logo,
    LogoLink,
    RightNav,
    AuthButtons, 
    MyMobileNavButton,
    CloseIcon 
} from './desktopNavbar.styles';

import NavLinks from './NavLinks';
import mobileNavIcon from '../../images/mobile-nav-icon.svg';
import closeIcon from '../../images/close.svg';
import SearchBar from './SearchBar';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import SearchResultsModal from '../searchResultsModal/SearchResultsModal';
import ProfileMenu from '../auth/user-profile/profile-menu/profile-menu.component';
import SiteLogo from './SiteLogo';

const DesktopNavbar = ({isAuth, user, displayMobileNavbar, toggleMobileNavbar, getAllItems, items}) => {
    useEffect(() => {
        getAllItems();
    }, []);

    const [showSearchResultsModal, setShowSearchResultsModal] = useState(false);
    const openSearchResultsModal = () => setShowSearchResultsModal(true);
    const closeSearchResultsModal = () => setShowSearchResultsModal(false);
    const [input, setInput] = useState('');

    const filteredItems = items.filter(item => {
        if (input.length == 0) {
            return '';
        } else {
            let title = item.deal_title.toLowerCase().includes(input.toLowerCase());
            let category = item.category.category_name.toLowerCase().includes(input.toLowerCase());
            let store = item.store.store_name.toLowerCase().includes(input.toLowerCase());
            return title || category || store;
        }
    });

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
                        input={input}
                        setInput={setInput}
                        // onChange={updateInput}
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
                    <SearchResultsModal
                        input={input}
                        filteredItems={filteredItems}
                        closeSearchResultsModal={closeSearchResultsModal}
                    />
                :
                    null
            }
        </>
    )
}

const mapStateToProps = state => ({
    items: state.items.items
});

export default connect(mapStateToProps, { getAllItems })(DesktopNavbar);