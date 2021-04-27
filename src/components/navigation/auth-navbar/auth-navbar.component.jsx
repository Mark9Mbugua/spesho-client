import React from 'react';
import { AuthNavbarContainer } from './auth-navbar.styles';
import { 
    Logo,
    LogoLink
} from '../desktop-navbar/desktop-navbar.styles';
import SiteLogo from '../site-logo/site-logo.component';

const AuthNavbar = () => {
    return (
        <AuthNavbarContainer>
            <SiteLogo />
            <Logo>
                <LogoLink to="/">Dealie</LogoLink>
            </Logo>  
        </AuthNavbarContainer>
    )
}

export default AuthNavbar