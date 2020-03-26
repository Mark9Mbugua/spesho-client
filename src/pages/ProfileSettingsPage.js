import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserProfile } from '../actions/auth';
import Footer from '../components/common/Footer';
import ProfileHeader from '../components/auth/userProfile/profileHeader/ProfileHeader';
import ProfileSettings from '../components/auth/userProfile/profileSettings/ProfileSettings';

class ProfileSettingsPage extends Component {
    componentDidMount() {
        this.props.loadUserProfile();
    }
    render() {
        const { isAuthenticated, profile } = this.props;
        //console.log(profile)
        return (
            <div>
                <ProfileHeader 
                    isAuth={isAuthenticated}
                    profile={profile}
                />
                <ProfileSettings 
                    isAuth={isAuthenticated}
                    getProfile={profile}
                />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    profile: state.auth.profile,
    error: state.errors
});

export default (connect(mapStateToProps, { loadUserProfile })(ProfileSettingsPage))
