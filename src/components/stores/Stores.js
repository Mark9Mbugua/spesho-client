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
import { getStores } from '../../actions/stores';

export class Stores extends Component {
    state = {
        modal: false,
    };

    static propTypes = {
        categories: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getStores();
    }

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

    render() {
        return (
            <Fragment>
                <UncontrolledDropdown
                    onMouseOver={this.onMouseEnter} 
                    isOpen={this.state.dropdownOpen}
                    onMouseLeave={this.onMouseLeave} 
                    toggle={this.toggle}>
                    <DropdownToggle caret color="inherit">
                        <span style={{color: "white"}}>Stores</span>
                    </DropdownToggle>
                    <DropdownMenu>
                        { this.props.stores.map(store =>(
                            <DropdownItem key={store.id}>
                                    <NavLink href="#">
                                    <span style={{color: "black"}}>{store.store_name}</span>
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
    stores: state.stores.stores
});

export default connect(mapStateToProps, { getStores })
(Stores);  