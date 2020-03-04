import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserProfile } from '../actions/auth';
import Footer from '../components/common/Footer';
import ProfileHeader from '../components/auth/userProfile/profileHeader/ProfileHeader';

class ProfilePage extends Component {
    componentDidMount() {
        this.props.loadUserProfile();
    }

    render() {
        const { isAuthenticated, user } = this.props;
        return (
            <div>
                <ProfileHeader 
                    isAuth={isAuthenticated}
                    profile={user}
                />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.errors
});

export default (connect(mapStateToProps, { loadUserProfile })(ProfilePage))


