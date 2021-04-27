import React from 'react';
import Categories from '../categories/categories.component';
import Stores from '../stores/stores.component';
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
