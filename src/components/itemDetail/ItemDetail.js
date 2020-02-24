import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { getItem } from '../../actions/items';
import { ItemDetailContainer } from './itemDetail.styles';


class ItemDetail extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getItem(this.props.id);
    };
    render() {
        let { items, id } = this.props
        items = items.filter(item => item.id === id)     
        console.log(items)

        return (
            <div>
                {items.map(item => (
                    <ItemDetailContainer key={item.id}>
                        <div className="item-section">
                            <div className="header">
                                <h2 className="menu">{item.deal_title}</h2>
                                <p className="brand">{item.brand}</p>
                            </div>
                            <div className="main">
                                <div className="main-left">
                                    <div className="prices">
                                        <div className="price">
                                            <p>Ksh {item.price}</p>
                                        </div>
                                        <div className="original-price">
                                            <p>Ksh {item.original_price}</p>
                                        </div>
                                        <div className="discount">
                                            <p>Off {item.discount}%</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <div className="main-right">
                                    <div className="image-container">
                                        <img className="image" src={item.src} alt="nav icon" />
                                        <button className="deal-button">See Deal</button>
                                        <hr />
                                    </div>
                                    <div className="good-deal">
                                        <p>Good Deal?</p>
                                    </div>
                                    <div className="votes">
                                        <p><ThumbUpAltOutlinedIcon /> {item.likes_count}</p>
                                        <p><ThumbDownAltOutlinedIcon /> {item.dislikes_count}</p>
                                        <hr />
                                    </div>  
                                </div>
                            </div>
                            <p>{item.category.category_name}</p>
                            <p>{item.store.store_name}</p>
                        </div>                                         
                    </ItemDetailContainer>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items.items
});

export default connect(mapStateToProps, { getItem })
(ItemDetail);
