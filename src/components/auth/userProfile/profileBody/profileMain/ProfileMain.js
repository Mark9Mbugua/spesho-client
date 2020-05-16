import React from 'react';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import EventAvailableTwoToneIcon from '@material-ui/icons/EventAvailableTwoTone';
import ContactPhoneTwoToneIcon from '@material-ui/icons/ContactPhoneTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import InsertCommentTwoToneIcon from '@material-ui/icons/InsertCommentTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import WcTwoToneIcon from '@material-ui/icons/WcTwoTone';
import { ProfileMainContainer } from './profileMain.styles';


const ProfileMain = ({isAuth, profile}) => {
    console.log(profile)
    return (
        <ProfileMainContainer>
            <h1 className="page-title">Profile Overview</h1>
            <div className="upper-section">
                <div className="about-me">
                    <h2 className="section-title">About Me</h2>
                    <div className="profile-details">
                        <p><EventAvailableTwoToneIcon/> Joined {profile && profile.user ? `${profile.user.created_on}` : ''}</p>
                        <hr />
                        <p><EmailTwoToneIcon/> {profile && profile.user ? `${profile.user.email}` : ''}</p>
                        <hr />
                        <p><InfoTwoToneIcon /> Bio: {profile && profile.user ? `${profile.bio}` : 'Edit Bio'}</p>
                        <hr />
                        <p><ContactPhoneTwoToneIcon /> {profile && profile.user ? `${profile.phone_number}` : 'Edit phone number'}</p>
                        <hr />
                        <p><WcTwoToneIcon /> {profile && profile.user ? `${profile.gender}` : 'Edit gender'}</p>
                        <hr />
                        <p>Birth Date: {profile && profile.user ? `${profile.birth_date}` : 'Edit birth date'}</p>
                        <hr />
                    </div>
                </div>
                <div className="my-stats">
                    <h2 className="section-title">My Statistics</h2>
                    <div className="stats-section">
                        <div className="stat">
                            <div className="count">
                                <p>0</p>
                            </div>
                            <div className="count-text">
                                <p><ShoppingCartTwoToneIcon/>Deals Posted</p>
                            </div>
                        </div>
                        <div className="profile-vl"></div>
                        <div className="stat">
                            <div className="count">
                                <p>0</p>
                            </div>
                            <div className="count-text">
                                <p><ThumbUpAltTwoToneIcon/> Votes Submitted</p>
                            </div>
                        </div>
                        <div className="profile-vl"></div>
                        <div className="stat">
                            <div className="count">
                                <p>0</p>
                            </div>
                            <div className="count-text">
                                <p><InsertCommentTwoToneIcon/> Comments Posted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileMainContainer>
    )
}

export default ProfileMain
