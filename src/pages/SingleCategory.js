import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItemsByCategory } from './../actions/items';
import Card from '../components/common/Card';

export class SingleCategory extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    }

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        console.log(this.props);
        this.props.getItemsByCategory(this.state.id);
    };

    render() {
        const { items } = this.props;
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

export default connect(mapStateToProps, { getItemsByCategory })
(SingleCategory);  