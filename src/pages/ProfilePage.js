import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserProfile } from '../actions/auth';
import Footer from '../components/common/Footer';
import ProfileHeader from '../components/auth/userProfile/profileHeader/ProfileHeader';
import ProfileBody from '../components/auth/userProfile/profileBody/ProfileBody';


class ProfilePage extends Component {
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
                <ProfileBody 
                    isAuth={isAuthenticated}
                    profile={profile}
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

export default (connect(mapStateToProps, { loadUserProfile })(ProfilePage))


