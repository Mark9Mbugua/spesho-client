import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { LogoutContainer } from './logout.styles';

const Logout = ({ logout, toggleMobileNavbar }) => {
    return (
        <LogoutContainer>
            <Link 
                to="/signin" 
                className="item-link" 
                onClick={() => {
                    logout(); 
                    toggleMobileNavbar(); 
                }}
            >
                Logout
            </Link>
        </LogoutContainer>
    )
}

export default connect(null, { logout })(Logout);
