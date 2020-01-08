import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllItems } from '../../actions/items';
import Card from '../common/Card'; 

export class Items extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getAllItems();
    };

    render() {
        let { items } = this.props
        items = items.filter(item => item.front_page === true)
        return (
            <div className="container">
                <div className="row">
                    {items.map(item => (
                        <div class="col-xs-6 m-2">
                           <Card 
                                imageSrc={item.src} 
                                title={item.deal_title}
                                price={item.price}
                                description={item.description}
                                dealUrl={item.deal_url}
                           />
                        </div>
                    ))}
                </div>
            </div>
        );    
    }
}

const mapStateToProps = state => ({
    items: state.items.items
});

export default connect(mapStateToProps, { getAllItems })
(Items);  