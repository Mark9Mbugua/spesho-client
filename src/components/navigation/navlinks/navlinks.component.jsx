import React from 'react';
import Categories from '../../categories/categories.component';
import Stores from '../../stores/stores.component';

import { NavbarLinks } from '../desktop-navbar/desktop-navbar.styles';


const NavLinks = ({ showResultsModal }) => { 

    return (
        <NavbarLinks showResultsModal={showResultsModal}>
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
