import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavLinks = ({ isMobileLink, toggleMobileNavbar }) => { 
    let tempTabIndex
    if(isMobileLink) {
        tempTabIndex = "-1" 
    }
    
    return (
        <ul className="nav-links">
            <li>
                <Link 
                    to="/categories" 
                    className="link" 
                    tabIndex={tempTabIndex}
                    onClick={toggleMobileNavbar}
                >
                    categories
                </Link> 
            </li>
            <li>
                <Link 
                    to="/stores"
                    className="link" 
                    tabIndex={tempTabIndex}
                    onClick={toggleMobileNavbar}
                >
                    stores
                </Link>
            </li>
        </ul>
    )
}

export default MobileNavLinks
