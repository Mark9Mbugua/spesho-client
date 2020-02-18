import React, { Component, Fragment } from 'react';
import { NavItem } from 'reactstrap';
import Categories from '../categories/Categories';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { NavbarContainer } from './header.styles';
import Stores from '../stores/Stores';




const categories = (
    <Fragment>
      <NavItem>
        <Categories />
      </NavItem>
    </Fragment>
  );

  const stores = (
    <Fragment>
      <NavItem>
        <Stores />
      </NavItem>
    </Fragment>
  );

class Header extends Component { 
   
  state = {
    displayMobileNavbar: false
  }

  //event listener that is going to listen to resize events
  componentDidMount = () => {
    window.addEventListener('resize', this.checkAndAutoHideMobileNavbar)
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
    return (
      <NavbarContainer>
        <DesktopNavbar 
          displayMobileNavbar={this.state.displayMobileNavbar}
          toggleMobileNavbar={this.toggleMobileNavbar} 
        />
        <MobileNavbar displayMobileNavbar={this.state.displayMobileNavbar} />
      </NavbarContainer>
    )
  }
}

export default Header
