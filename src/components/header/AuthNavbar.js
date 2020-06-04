import React from 'react';
import { AuthNavbarContainer } from './authNavbar.styles';
import { 
    Logo,
    LogoLink
} from './desktopNavbar.styles';
import SiteLogo from './SiteLogo';

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