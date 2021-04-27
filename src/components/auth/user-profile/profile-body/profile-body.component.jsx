import React from 'react';
import ProfileMain from '../profile-main/profile-main.component';

const ProfileBody = ({isAuth, profile}) => {
    return (
        <div>
            <ProfileMain 
                isAuth={isAuth}
                profile={profile}
            />
        </div>
    )
}

export default ProfileBody
