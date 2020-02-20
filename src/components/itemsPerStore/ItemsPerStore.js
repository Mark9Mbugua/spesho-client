import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getAllItems } from '../../actions/items';
import ItemCard from '../common/Card';
import CustomTitle from '../common/CustomTitle';


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

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {items.map(item => (
                            <div className="col-xs-6 m-2">
                                <ItemCard
                                    key={item.id} 
                                    imageSrc={item.src} 
                                    title={item.deal_title}
                                    price={item.price}
                                    oldPrice={item.original_price}
                                    discount={item.discount}
                                    description={item.description}
                                    dealUrl={item.deal_url}
                                />
                            </div>
                        ))}
                    </div>
                </div>
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
