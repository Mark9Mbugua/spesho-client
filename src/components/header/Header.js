import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import AuthNavbar from './AuthNavbar';
import { NavbarContainer } from './header.styles';
import { loadUserProfile } from '../../actions/auth';
import Stores from '../stores/Stores';


class Header extends Component { 
   
  state = {
    displayMobileNavbar: false
  }

  //event listener that is going to listen to resize events
  componentDidMount = () => {
    window.addEventListener('resize', this.checkAndAutoHideMobileNavbar)
    this.props.loadUserProfile();
  }

  //clean up after component mounts
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.checkAndAutoHideMobileNavbar)
  }

  toggleMobileNavbar = () => {
    this.setState(prevState => {
      return {displayMobileNavbar: !prevState.displayMobileNavbar }
    })
  }

  checkAndAutoHideMobileNavbar = () => {
    const screenWidth = window.innerWidth

    if (this.state.displayMobileNavbar && screenWidth > 768) {
      this.setState({
        displayMobileNavbar: false
      })
    }
  }

  render() {
    let { isAuthenticated, user } = this.props
    // console.log(isAuthenticated)
    // console.log(user)
    if (window.location.pathname === '/signup' || window.location.pathname === '/signin') 
      return (
        <NavbarContainer>
          <AuthNavbar />
        </NavbarContainer>
      );
    return (
      <NavbarContainer>
        <DesktopNavbar 
          isAuth={isAuthenticated}
          profile={user}
          displayMobileNavbar={this.state.displayMobileNavbar}
          toggleMobileNavbar={this.toggleMobileNavbar} 
        />
        <MobileNavbar 
          isAuth={isAuthenticated}
          profile={user}
          displayMobileNavbar={this.state.displayMobileNavbar} 
        />
      </NavbarContainer>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.errors
});

export default connect(mapStateToProps, { loadUserProfile })(Header)
