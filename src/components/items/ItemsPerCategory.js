import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getAllItems } from '../../actions/items';
import ItemCard from '../common/Card';
import CustomTitle from '../common/CustomTitle';
import ItemsContainer from './ItemsContainer';


class ItemsPerCategory extends Component {   
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getAllItems();

    };

    render() {
        let { items, id } = this.props;
        items = items.filter(item => item.category.id === id)

        return <ItemsContainer items={items} />    
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    category: state.category.category

});

export default connect(
    mapStateToProps, 
    { getAllItems })
(ItemsPerCategory);  
