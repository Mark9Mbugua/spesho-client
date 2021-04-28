import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserProfile } from '../redux/actions/auth';
import SavedItems from '../components/auth/user-profile/saved-items/saved-items';
import Footer from '../components/common/Footer';
import ProfileHeader from '../components/auth/user-profile/profile-header/profile-header';


class SavedItemsPage extends Component {
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
                <SavedItems />
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

export default (connect(mapStateToProps, { loadUserProfile })(SavedItemsPage))