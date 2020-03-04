import React from 'react';
import { ProfileHeaderContainer } from './profileHeader.styles';
import profileIcon from '../../../../images/profile-icon.svg';
import userIcon from '../../../../images/user-icon.svg';
import itemIcon from '../../../../images/saved-item-icon.svg';
import settingsIcon from '../../../../images/settings-icon.svg';

const ProfileHeader = ({isAuth, profile}) => {
    return (
        <ProfileHeaderContainer>
            <div className="user-details">
                <div className="profile-icon">
                    <img src={profileIcon} alt="logo icon" />
                </div>
                <div className="username">
                    {profile && profile.user ? `${profile.user.username}` : ''}
                </div>
            </div>
            <div className="profile-items">
                <div className="item-group">
                    <div className="item-icon">
                        <img src={userIcon} alt="logo icon" />
                    </div>
                    <div className="item-title">
                        My Profile
                    </div>
                </div>
                <div className="item-group">
                    <div className="item-icon">
                        <img src={itemIcon} alt="logo icon" />
                    </div>
                    <div className="item-title">
                        Saved Items
                    </div>
                </div>
                <div className="item-group">
                    <div className="item-icon">
                        <img src={settingsIcon} alt="logo icon" />
                    </div>
                    <div className="item-title">
                        Settings
                    </div>
                </div>
            </div>
        </ProfileHeaderContainer>
    )
}

export default ProfileHeader
