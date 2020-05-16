import React from 'react';
import ProfileMain from './profileMain/ProfileMain';

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
