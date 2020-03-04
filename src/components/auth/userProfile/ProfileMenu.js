import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileItemsList } from './profileMenu.styles';
import Logout from '../Logout';

const ProfileMenu = ({ profile }) => {
    return (
        <ul className="nav-links">
            <li>
                <ProfileItemsList>
                    <li className="menu-item">
                        <Link to="#" className="link">
                            {profile && profile.user ? `${profile.user.username}` : ''}
                        </Link>
                        <ul className="dropdown-list">
                            <li className="link-body">
                                <Link to="/profile" className="item-link">
                                    ProfileOverview    
                                </Link>      
                            </li>
                            <li className="link-body">
                                <Link to="#" className="item-link">
                                    My Deal Alerts    
                                </Link>      
                            </li>
                            <li className="link-body">
                                <Link to="#" className="item-link">
                                    Saved Items    
                                </Link>      
                            </li>
                            <li className="link-body">
                                <Link to="#" className="item-link">
                                    Notifications    
                                </Link>      
                            </li>
                            <li className="link-body">
                                <Link to="#" className="item-link">
                                    Settings  
                                </Link>      
                            </li>
                            <li className="link-body">
                                <Logout />      
                            </li>
                        </ul>
                    </li>
                </ProfileItemsList>
            </li>
        </ul> 
    );
}

export default ProfileMenu

