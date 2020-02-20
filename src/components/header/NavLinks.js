import React from 'react';
import Categories from '../categories/Categories';
import Stores from '../stores/Stores';


const NavLinks = props => { 

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
