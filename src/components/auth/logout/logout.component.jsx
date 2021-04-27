import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { LogoutContainer } from './logout.styles';
import { ItemLink } from '../user-profile/profile-menu/profile-menu.styles';

const Logout = ({ logout, toggleMobileNavbar }) => {
    return (
        <LogoutContainer>
            <ItemLink 
                to="/signin" 
                onClick={() => {
                    logout(); 
                    toggleMobileNavbar(); 
                }}
            >
                Logout
            </ItemLink>
        </LogoutContainer>
    )
}

export default connect(null, { logout })(Logout);
