import React from 'react';
import { 
    NavLinks, 
    MenuLinks,
    MenuLink
} from './mobileNavbar.styles';

const MobileNavLinks = ({ isMobileLink, toggleMobileNavbar }) => { 
    let tempTabIndex
    if(isMobileLink) {
        tempTabIndex = "-1" 
    }
    
    return (
        <NavLinks>
            <MenuLinks>
                <MenuLink 
                    to="/categories" 
                    tabIndex={tempTabIndex}
                    onClick={toggleMobileNavbar}
                >
                    categories
                </MenuLink> 
            </MenuLinks>
            <MenuLinks>
                <MenuLink 
                    to="/stores"
                    tabIndex={tempTabIndex}
                    onClick={toggleMobileNavbar}
                >
                    stores
                </MenuLink>
            </MenuLinks>
        </NavLinks>
    )
}

export default MobileNavLinks
