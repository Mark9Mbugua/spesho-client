import React, { Component, Fragment } from "react";
import {
    NavLink,
    UncontrolledDropdown,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../../actions/categories';

export class Categories extends Component {

    state = {
        dropdownOpen: false,
    };

    static propTypes = {
        categories: PropTypes.array.isRequired
    };

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    };

    onMouseEnter = () => {
        this.setState({dropdownOpen: true});
      }
    
    onMouseLeave = () => {
        this.setState({dropdownOpen: false});
      }

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return (
            <Fragment>
                <UncontrolledDropdown
                    onMouseOver={this.onMouseEnter} 
                    isOpen={this.state.dropdownOpen}
                    onMouseLeave={this.onMouseLeave} 
                    toggle={this.toggle}>
                    <DropdownToggle caret color="inherit">
                        <span style={{color: "white"}}>Categories</span>
                    </DropdownToggle>
                    <DropdownMenu>
                        { this.props.categories.map(category =>(
                            <DropdownItem key={category.id}>
                                    <NavLink href="#">
                                        <span style={{color: "black"}}>{category.category_name}</span>
                                    </NavLink>      
                            </DropdownItem>
                        )) }
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Fragment>
                        
           
          );    
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, { getCategories })
(Categories);  