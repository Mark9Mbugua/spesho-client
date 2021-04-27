import React from 'react';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import { 
    ProfileItemsList,
    ItemLink 
} from './profile-menu.styles';
import { 
    NavbarLinks, 
    NavLinkItem
} from '../../../navigation/desktop-navbar/desktop-navbar.styles';
import Logout from '../../logout/logout.component';

const ProfileMenu = ({ user }) => {
    return (
        <NavbarLinks>
            <li>
                <ProfileItemsList>
                    <li className="menu-item">
                        <NavLinkItem to="#">
                            <div>
                                { user ? `${user.username}` 
                                    : 'My Account'
                                }<ArrowDropDownTwoToneIcon />
                            </div>
                        </NavLinkItem>
                        <ul>
                            <li>
                                <ItemLink to="/profile">
                                    ProfileOverview    
                                </ItemLink>      
                            </li>
                            <li>
                                <ItemLink to="#">
                                    My Deal Alerts    
                                </ItemLink>      
                            </li>
                            <li>
                                <ItemLink to="/saved-items">
                                    Saved Items    
                                </ItemLink>      
                            </li>
                            <li>
                                <ItemLink to="#">
                                    Notifications    
                                </ItemLink>      
                            </li>
                            <li>
                                <ItemLink to='/settings'>
                                    Profile Settings  
                                </ItemLink>      
                            </li>
                            <li>
                                <Logout />      
                            </li>
                        </ul>
                    </li>
                </ProfileItemsList>
            </li>
        </NavbarLinks> 
    );
}

export default ProfileMenu

