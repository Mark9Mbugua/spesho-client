import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserProfile } from '../actions/auth';
import Footer from '../components/common/Footer';
import ProfileHeader from '../components/auth/user-profile/profile-header/profile-header';
import ProfileSettings from '../components/auth/user-profile/profile-settings/main-profile-settings/profile-settings.component';

class ProfileSettingsPage extends Component {
    componentDidMount() {
        this.props.loadUserProfile();
    }
    render() {
        const { isAuthenticated, profile } = this.props;
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
