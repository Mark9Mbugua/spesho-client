import React from 'react';
import UpdateBioModal from './UpdateBioModal';
import UpdateGenderModal from './UpdateGenderModal';
import UpdatePhoneModal from './UpdatePhoneModal';
import VerifyCodeModal from './VerifyCodeModal';
import UpdateBirthDate from './UpdateBirthDate';
import { ProfileSettingsContainer } from './profileSettings.styles'; 

const ProfileSettings = ({ getProfile }) => {
    //console.log(getProfile)
    return (
        <ProfileSettingsContainer>
            <h1 className="page-title">Settings</h1>
            <div className="modal-container">
                <div className="modal-body">
                    <p>Bio </p>
                    <div className="edit">
                        <span>{getProfile && getProfile.user ? `${getProfile.bio}` : 'Edit Bio'}</span>
                        <div className="icon">
                            <UpdateBioModal getProfile={getProfile} />
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <p>Gender </p>
                    <div className="edit">
                        <span>{getProfile && getProfile.user ? `${getProfile.gender}` : 'Edit Gender'}</span>
                        <div className="icon">
                            <UpdateGenderModal getProfile={getProfile} />
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <p>Phone</p>
                    <div className="edit">
                        <span>{getProfile && getProfile.user ? `${getProfile.phone_number}` : 'Edit Phone Number'}</span>
                        <div className="icon">
                            <UpdatePhoneModal getProfile={getProfile} />
                        </div>
                        <div className="verify-button">
                            <VerifyCodeModal getProfile={getProfile} />
                        </div>
                    </div>
                </div>
                <div className="date-body">
                    <p>Birth Date </p>
                    <div className="edit-date">
                        <div className="calendar">
                            <UpdateBirthDate />
                        </div>
                    </div>
                </div>
            </div>  
        </ProfileSettingsContainer>
    )
}

export default ProfileSettings
