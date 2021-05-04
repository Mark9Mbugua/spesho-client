import React from 'react';
import { AuthNavbarContainer } from './auth-navbar.styles';
import { 
    Logo,
    LogoLink,
    CompanyName
} from '../desktop-navbar/desktop-navbar.styles';
import SiteLogo from '../site-logo/site-logo.component';

const AuthNavbar = () => {
    return (
        <AuthNavbarContainer>
            <Logo>
                <LogoLink to="/">
                    <SiteLogo />
                    <CompanyName>Dealie</CompanyName>
                </LogoLink>
            </Logo>
        </AuthNavbarContainer>
    );
}

export default AuthNavbar