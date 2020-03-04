import React, { Component } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import AuthNavbar from './AuthNavbar';
import { NavbarContainer } from './header.styles';


class Header extends Component { 
  constructor(props){
    super(props);
    this.state = {
      displayMobileNavbar: false,
      isAuth: false,
      profile: {},
      isLoaded: false
    }
  } 


  //event listener that is going to listen to resize events
  componentDidMount = () => {
    window.addEventListener('resize', this.checkAndAutoHideMobileNavbar);
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
    let { isAuth, profile } = this.props
    console.log(this.props)
    if (window.location.pathname === '/signup' || window.location.pathname === '/signin') 
      return (
        <NavbarContainer>
          <AuthNavbar />
        </NavbarContainer>
      );
    return (
      <NavbarContainer>
        <DesktopNavbar
          isAuth={isAuth}
          profile={profile} 
          displayMobileNavbar={this.state.displayMobileNavbar}
          toggleMobileNavbar={this.toggleMobileNavbar} 
        />
        <MobileNavbar
          isAuth={isAuth}
          profile={profile}  
          displayMobileNavbar={this.state.displayMobileNavbar} 
        />
      </NavbarContainer>
    );
  }
}

export default Header
