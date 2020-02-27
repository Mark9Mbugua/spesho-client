import React from 'react';
import { AuthNavbarContainer } from './authNavbar.styles';
import { Link } from 'react-router-dom';
import SiteLogo from './SiteLogo';

const AuthNavbar = () => {
    return (
        <AuthNavbarContainer>
            <SiteLogo />
            <div className="logo">
                <Link to="/" className="logo-link">Dealie</Link>
            </div>  
        </AuthNavbarContainer>
    )
}

export default AuthNavbar