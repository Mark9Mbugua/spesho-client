import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUserProfile } from '../../../actions/auth';

class ProfileOverview extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.loadUserProfile();
    };

    render() {
        let { user } =this.props;
        console.log(user)
        return (
            <div>
                <h1>My profile</h1>
                <p></p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.errors
});

export default connect(mapStateToProps, { loadUserProfile })(ProfileOverview)
