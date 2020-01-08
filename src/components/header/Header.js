import React, { Component, Fragment } from 'react';
import Categories from '../categories/Categories';
import Stores from '../stores/Stores';
import { NavItem } from 'reactstrap';


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

export default class Header extends Component {  

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">Dealie</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                          <li className="nav-item">
                              <a className="nav-link" href="#">{categories}</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">{stores}</a>
                          </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
