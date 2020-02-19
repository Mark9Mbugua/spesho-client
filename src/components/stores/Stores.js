import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStores } from '../../actions/stores';
import { StoresList } from './stores-styles';

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
            <StoresList>
                <li className="menu-item">
                    <Link to="#" className="link">stores</Link> 
                    <ul className="dropdown-list">
                        { this.props.stores.map(store =>(
                            <li key={store.id}>
                                <Link to ="/stores" className="link">
                                    {store.store_name}    
                                </Link>      
                            </li>
                        )) }
                    </ul>
                </li>     
            </StoresList>
        );
    }
}

const mapStateToProps = state => ({
    stores: state.stores.stores
});

export default connect(mapStateToProps, { getStores })
(Stores);  