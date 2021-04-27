import React from 'react';
import { Link } from 'react-router-dom';
import { 
    ProfileHeaderContainer,
    UserDetails,
    ProfileIcon,
    Username,
    ProfileItems,
    ItemGroup,
    ItemIcon,
    ItemTitle,
    ProfileLink
 } from './profile-header.styles';
import profileIcon from '../../../../images/profile-icon.svg';
import userIcon from '../../../../images/user-icon.svg';
import itemIcon from '../../../../images/saved-item-icon.svg';
import settingsIcon from '../../../../images/settings-icon.svg';

const ProfileHeader = ({isAuth, profile}) => {
    return (
        <ProfileHeaderContainer>
            <UserDetails>
                <ProfileIcon>
                    <img src={profileIcon} alt="logo icon" />
                </ProfileIcon>
                <Username>
                    {profile && profile.user ? `${profile.user.username}` : ''}
                </Username>
            </UserDetails>
            <ProfileItems>
                <ItemGroup>
                    <ItemIcon>
                        <img src={userIcon} alt="logo icon" />
                    </ItemIcon>
                    <ItemTitle>
                        <ProfileLink to="/profile">
                            My Profile    
                        </ProfileLink>  
                    </ItemTitle>
                </ItemGroup>
                <ItemGroup>
                    <ItemIcon>
                        <img src={itemIcon} alt="logo icon" />
                    </ItemIcon>
                    <ItemTitle>
                        <ProfileLink to="/saved-items">
                            Saved Items    
                        </ProfileLink>
                    </ItemTitle>
                </ItemGroup>
                <ItemGroup>
                    <ItemIcon>
                        <img src={settingsIcon} alt="logo icon" />
                    </ItemIcon>
                    <ItemTitle>
                        <ProfileLink to='/settings'>
                            Profile Settings  
                        </ProfileLink>
                    </ItemTitle>
                </ItemGroup>
            </ProfileItems>
        </ProfileHeaderContainer>
    )
}

export default ProfileHeader
