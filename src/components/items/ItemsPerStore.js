import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getAllItems } from '../../actions/items';
import ItemCard from '../common/Card';
import CustomTitle from '../common/CustomTitle';
import ItemsContainer from './ItemsContainer';


class ItemsPerStore extends Component {   
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getAllItems();

    };

    render() {
        let { items, id } = this.props;
        items = items.filter(item => item.store.id === id)

        return <ItemsContainer items={items} />
    }
}

const mapStateToProps = state => ({
    items: state.items.items

});

export default connect(
    mapStateToProps, 
    { getAllItems })
(ItemsPerStore);  
