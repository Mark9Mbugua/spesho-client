import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import Categories from '../categories/Categories';
import Stores from '../stores/Stores';

const MobileNavLinks = props => { 
    let tempTabIndex
    if(props.isMobileLink) {
        tempTabIndex = "-1" 
    }
    return (
        <ul className="nav-links">
            <li>
                <Link to="/categories" className="link" tabIndex={tempTabIndex}>categories</Link> 
            </li>
            <li>
                <Link to="/stores" className="link" tabIndex={tempTabIndex}>stores</Link>
            </li>
        </ul>
    )
}

export default MobileNavLinks
