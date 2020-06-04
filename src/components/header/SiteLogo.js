import React from 'react';
import { Link } from 'react-router-dom';
import { LogoContainer } from './siteLogo.styles';
import logoIcon from '../../images/logo-icon.svg';

const SiteLogo = () => {
    return (
        <LogoContainer>
            <Link to="/">
                <img src={logoIcon} alt="logo icon" />
            </Link>
        </LogoContainer>
    )
}

export default SiteLogo 
