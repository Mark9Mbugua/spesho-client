import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllItems } from '../../actions/items';
import ItemsContainer from './ItemsContainer'; 

class HomePageItems extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getAllItems();
    };

    render() {
        //console.log(this.props)
        let { items } = this.props
        items = items.filter(item => item.front_page === true)
        
        return <ItemsContainer items={items} />    
    }
}

const mapStateToProps = state => ({
    items: state.items.items
});

export default connect(mapStateToProps, { getAllItems })
(HomePageItems);  