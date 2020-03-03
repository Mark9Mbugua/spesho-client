import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import { logout } from '../../actions/auth';
import { LogoutContainer } from './logout.styles';

const Logout = ({ logout }) => {
    return (
        <LogoutContainer>
            <NavLink className="nav-link" onClick={logout} href="/signin">
                Logout
            </NavLink>
        </LogoutContainer>
    )
}

export default connect(null, { logout })(Logout);
