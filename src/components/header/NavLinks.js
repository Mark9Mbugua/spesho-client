import React from 'react';
import Categories from '../categories/Categories';
import Stores from '../stores/Stores';
import { NavbarLinks } from './desktopNavbar.styles';


const NavLinks = () => { 

    return (
        <NavbarLinks>
            <li>
                <Categories />
            </li>
            <li>
                <Stores />
            </li>
        </NavbarLinks>
    )
}

export default NavLinks
