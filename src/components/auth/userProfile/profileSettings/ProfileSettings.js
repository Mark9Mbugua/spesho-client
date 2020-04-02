import React from 'react';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import ChangeUserPassword from './ChangeUserPassword';
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
            <div className="modal-container">
                <h1 className="page-title">Profile Settings</h1>
                <div className="modal-body">
                    <div className="modal-heading">
                        <h3>Bio</h3>
                    </div>
                    <div className="edit">
                        <span>{getProfile && getProfile.user ? `${getProfile.bio}` : 'Edit Bio'}</span>
                        <div className="icon">
                            <UpdateBioModal getProfile={getProfile} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="modal-body">
                    <div className="modal-heading">
                        <h3>Gender</h3>
                    </div>
                    <div className="edit">
                        <span>{getProfile && getProfile.user ? `${getProfile.gender}` : 'Edit Gender'}</span>
                        <div className="icon">
                            <UpdateGenderModal getProfile={getProfile} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="modal-body">
                    <div className="modal-heading">
                        <h3>Phone</h3>
                    </div>
                    <div className="edit">
                        <span>{getProfile && getProfile.user ? `${getProfile.phone_number}` : 'Edit Phone Number'}</span>
                            <div className="phone-icon-button">
                                <div className="phone-icon">
                                    <UpdatePhoneModal getProfile={getProfile} />
                                </div>
                                <div className="verify-button">        
                                    <VerifyCodeModal getProfile={getProfile} />
                                </div>
                            </div>
                    </div>
                </div>
                <hr />
                <div className="modal-body">
                    <div className="modal-heading">
                        <h3>Password</h3>
                    </div>
                    <div className="edit">
                        <VisibilityOffTwoToneIcon />
                        <div className="icon">
                            <ChangeUserPassword getProfile={getProfile} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="date-body">
                    <div className="modal-heading">
                        <h3>Birth Date</h3>
                    </div>
                    <div className="edit-date">
                        <span>{getProfile && getProfile.user ? `${getProfile.birth_date}` : 'Format: Year-Month-Day'}</span>
                        <div className="calendar">
                            <UpdateBirthDate />
                        </div>
                    </div>
                </div>
                <hr />
            </div> 
        </ProfileSettingsContainer>
    )
}

export default ProfileSettings
