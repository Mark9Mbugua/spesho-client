import React, { Fragment } from 'react';
import Categories from '../categories/Categories';
import Stores from '../stores/Stores';


const NavLinks = props => { 
    let tempTabIndex
    if(props.isMobileLink) {
        tempTabIndex = "-1" 
    }
    return (
        <ul className="nav-links">
            <li>
                <Categories />
            </li>
            <li>
                <Stores />
            </li>
        </ul>
    )
}

export default NavLinks
