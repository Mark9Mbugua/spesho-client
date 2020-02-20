import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getAllItems } from '../../actions/items';
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
        const categoryNames = items.map(item => item.category.category_name)
        const categoryName = categoryNames[0]

        return (
            <div>
                <CustomTitle>{ categoryName }</CustomTitle>
                <ItemsContainer items={items} />
            </div>
        );    
    }
}

const mapStateToProps = state => ({
    items: state.items.items,

});

export default connect(
    mapStateToProps, 
    { getAllItems})
(ItemsPerCategory);  
