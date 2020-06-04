import React, { useState } from 'react';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import ChangeUserPassword from './ChangeUserPassword';
import UpdateBioModal from './UpdateBioModal';
import UpdateGenderModal from './UpdateGenderModal';
import UpdatePhoneModal from './UpdatePhoneModal';
import VerifyCodeModal from './VerifyCodeModal';
import UpdateBirthDate from './UpdateBirthDate';
import { 
    ProfileSettingsContainer,
    PageTitle,
    Attribute,
    EditDate,
    DateBody,
    PhoneIcon,
    PhoneButtons,
    UserDetails,
    EditAttribute,
    AttributeBody 
} from './profileSettings.styles';
import EditIcon from '@material-ui/icons/Edit'; 

const ProfileSettings = ({ getProfile }) => {
    //console.log(getProfile)
    const [showBioForm, setShowBioForm] = useState(false);
    const toggleBioForm = () => setShowBioForm(!showBioForm);

    const [showGenderForm, setShowGenderForm] = useState(false);
    const toggleGenderForm = () => setShowGenderForm(!showGenderForm);
    
    return (
        <ProfileSettingsContainer>
            <PageTitle>Profile Settings</PageTitle>
            <AttributeBody>
                <Attribute>
                    <h3>Bio</h3>
                </Attribute>
                <EditAttribute>
                    {showBioForm ? 
                        <UpdateBioModal 
                            toggleBioForm={toggleBioForm} 
                            bio={getProfile.bio}
                        />   
                        : 
                        <UserDetails>
                            <span>{getProfile && getProfile.user ? `${getProfile.bio}` : 'Edit Bio'}</span>
                            <div>
                                <EditIcon onClick={toggleBioForm}/>
                            </div>
                        </UserDetails> 
                    }
                </EditAttribute>
            </AttributeBody>
            <hr />
            <AttributeBody>
                <Attribute>
                    <h3>Gender</h3>
                </Attribute>
                <EditAttribute>
                    {showGenderForm ? 
                        <UpdateGenderModal 
                            toggleGenderForm={toggleGenderForm} 
                            gender={getProfile.gender}
                        />   
                        : 
                        <UserDetails>
                            <span>{getProfile && getProfile.user ? `${getProfile.gender}` : 'Edit Gender'}</span>
                            <div>
                                <EditIcon onClick={toggleGenderForm}/>
                            </div>
                        </UserDetails> 
                    }
                </EditAttribute>
            </AttributeBody>
            <hr />
            <AttributeBody>
                <Attribute>
                    <h3>Phone</h3>
                </Attribute>
                <EditAttribute>
                    <span>{getProfile && getProfile.user ? `${getProfile.phone_number}` : 'Edit Phone Number'}</span>
                        <PhoneButtons>
                            <PhoneIcon>
                                <UpdatePhoneModal getProfile={getProfile} />
                            </PhoneIcon>
                            <div>        
                                <VerifyCodeModal getProfile={getProfile} />
                            </div>
                        </PhoneButtons>
                </EditAttribute>
            </AttributeBody>
            <hr />
            <AttributeBody>
                <Attribute>
                    <h3>Password</h3>
                </Attribute>
                <EditAttribute>
                    <VisibilityOffTwoToneIcon />
                    <div className="icon">
                        <ChangeUserPassword getProfile={getProfile} />
                    </div>
                </EditAttribute>
            </AttributeBody>
            <hr />
            <DateBody>
                <Attribute>
                    <h3>Birth Date</h3>
                </Attribute>
                <EditDate>
                    <span>{getProfile && getProfile.user ? `${getProfile.birth_date}` : 'Format: Year-Month-Day'}</span>
                    <div>
                        <UpdateBirthDate />
                    </div>
                </EditDate>
            </DateBody>
            <hr />
        </ProfileSettingsContainer>
    )
}

export default ProfileSettings
