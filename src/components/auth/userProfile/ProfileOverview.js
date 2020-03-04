import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUserProfile } from '../../../actions/auth';

class ProfileOverview extends Component {
    static propTypes = {
        profile: PropTypes.object.isRequired
    };

    render() {
        const { profile } =this.props;
        console.log(profile)
        return (
            <div>
                <p>{profile && profile.user ? `${profile.user.username}` : ''}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.errors
});

export default (connect(mapStateToProps, { loadUserProfile })(ProfileOverview))
