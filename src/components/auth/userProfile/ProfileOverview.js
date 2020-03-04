import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUserProfile } from '../../../actions/auth';
import { ProfileItemsList } from './profileoverview.styles';
import Logout from '../Logout';

class ProfileOverview extends Component {
    static propTypes = {
        profile: PropTypes.object.isRequired
    };

    render() {
        const { profile } =this.props;
        console.log(profile)
        return (
            <ul className="nav-links">
                <li>
                    <ProfileItemsList>
                        <li className="menu-item">
                            <Link to="#" className="link">
                                {profile && profile.user ? `${profile.user.username}` : ''}
                            </Link>
                            <ul className="dropdown-list">
                                <li className="link-body">
                                    <Link to="#" className="item-link">
                                        ProfileOverview    
                                    </Link>      
                                </li>
                                <li className="link-body">
                                    <Link to="#" className="item-link">
                                        My Deal Alerts    
                                    </Link>      
                                </li>
                                <li className="link-body">
                                    <Link to="#" className="item-link">
                                        Saved Items    
                                    </Link>      
                                </li>
                                <li className="link-body">
                                    <Link to="#" className="item-link">
                                        Notifications    
                                    </Link>      
                                </li>
                                <li className="link-body">
                                    <Link to="#" className="item-link">
                                        Settings & Options    
                                    </Link>      
                                </li>
                                <li className="link-body">
                                    <Logout />      
                                </li>
                            </ul>
                        </li>
                    </ProfileItemsList>
                </li>
            </ul> 
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.errors
});

export default (connect(mapStateToProps, { loadUserProfile })(ProfileOverview))
