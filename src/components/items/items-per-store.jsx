import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getAllItems } from '../../redux/actions/items';
import CustomTitle from '../common/CustomTitle';
import ItemsContainer from './items-container.component';


class ItemsPerStore extends Component {   
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getAllItems();

    };

    render() {
        let { items, id } = this.props;
        items = items.filter(item => item.store.id === id);
        const storeNames = items.map(item => item.store.store_name);
        const storeName = storeNames[0];

        return (
            <div>
                <CustomTitle>{ storeName }</CustomTitle>
                <ItemsContainer items={items} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items

});

export default connect(
    mapStateToProps, 
    { getAllItems })
(ItemsPerStore);  
