import React from 'react';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import EventAvailableTwoToneIcon from '@material-ui/icons/EventAvailableTwoTone';
import ContactPhoneTwoToneIcon from '@material-ui/icons/ContactPhoneTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import InsertCommentTwoToneIcon from '@material-ui/icons/InsertCommentTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import WcTwoToneIcon from '@material-ui/icons/WcTwoTone';
import { 
    ProfileMainContainer,
    UpperSection,
    PageTitle,
    SectionTitle,
    UserStats,
    StatsSection,
    Stats,
    StatsCount,
    Line
} from './profile-main.styles';


const ProfileMain = ({isAuth, profile}) => {
    console.log(profile)
    return (
        <ProfileMainContainer>
            <PageTitle>Profile Overview</PageTitle>
            <UpperSection>
                <div>
                    <SectionTitle>About Me</SectionTitle>
                    <div>
                        <p>
                            <EventAvailableTwoToneIcon/> 
                            Joined {profile && profile.user ? `${profile.user.created_on}` : ''}
                        </p>
                        <hr />
                        <p>
                            <EmailTwoToneIcon/> 
                            {profile && profile.user ? `${profile.user.email}` : ''}
                        </p>
                        <hr />
                        <p>
                            <InfoTwoToneIcon /> 
                            Bio: {profile && profile.user ? `${profile.bio}` : 'Edit Bio'}
                        </p>
                        <hr />
                        <p>
                            <ContactPhoneTwoToneIcon /> 
                            {profile && profile.user ? `${profile.phone_number}` : 'Edit phone number'}
                        </p>
                        <hr />
                        <p>
                            <WcTwoToneIcon /> 
                            {profile && profile.user ? `${profile.gender}` : 'Edit gender'}
                        </p>
                        <hr />
                        <p>
                            Birth Date: 
                            {profile && profile.user ? `${profile.birth_date}` : 'Edit birth date'}
                        </p>
                        <hr />
                    </div>
                </div>
                <UserStats>
                    <SectionTitle>My Statistics</SectionTitle>
                    <StatsSection>
                        <Stats>
                            <StatsCount>
                                <span>0</span>
                            </StatsCount>
                            <div>
                                <span><ShoppingCartTwoToneIcon/>Deals Posted</span>
                            </div>
                        </Stats>
                        <Line />
                        <Stats>
                            <StatsCount>
                                <span>0</span>
                            </StatsCount>
                            <div>
                                <span><ThumbUpAltTwoToneIcon/> Votes Submitted</span>
                            </div>
                        </Stats>
                        <Line />
                        <Stats>
                            <StatsCount>
                                <span>0</span>
                            </StatsCount>
                            <div>
                                <span><InsertCommentTwoToneIcon/> Comments Posted</span>
                            </div>
                        </Stats>
                    </StatsSection>
                </UserStats>
            </UpperSection>
        </ProfileMainContainer>
    )
}

export default ProfileMain
