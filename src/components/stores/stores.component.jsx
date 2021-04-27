import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getStores } from '../../actions/stores';

import { 
    MenuList,
    MenuItem 
} from '../common/menu-list.styles';

import { NavLinkItem } from '../navigation/desktop-navbar/desktop-navbar.styles';

export class Stores extends Component {
    state = {
        modal: false,
    };

    static propTypes = {
        stores: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getStores();
    }

    render() {
        return (
            <MenuList>
                <MenuItem>
                    <NavLinkItem to="#">stores</NavLinkItem> 
                    <ul>
                        { this.props.stores.map(store =>(
                            <li key={store.id}>
                                <NavLinkItem to ={`/items/store/${store.id}`}>
                                    {store.store_name}    
                                </NavLinkItem>      
                            </li>
                        )) }
                    </ul>
                </MenuItem>     
            </MenuList>
        );
    }
}

const mapStateToProps = state => ({
    stores: state.stores.stores
});

export default withRouter(connect(mapStateToProps, { getStores })
(Stores));  