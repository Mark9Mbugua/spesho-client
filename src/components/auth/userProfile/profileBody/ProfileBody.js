import React from 'react';
import ProfileMain from './profileMain/ProfileMain';
import ProfileSidebar from './profileSidebar/ProfileSidebar';

const ProfileBody = ({isAuth, profile}) => {
    return (
        <div>
            <ProfileMain 
                isAuth={isAuth}
                profile={profile}
            />
            <ProfileSidebar 
                isAuth={isAuth}
                profile={profile}
            />
        </div>
    )
}

export default ProfileBody
