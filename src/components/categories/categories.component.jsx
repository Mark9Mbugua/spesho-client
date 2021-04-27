import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../../actions/categories';
import { 
     MenuList,
     MenuItem 
} from '../common/menu-list.styles';
import { NavLinkItem } from '../navigation/desktop-navbar/desktop-navbar.styles';

export class Categories extends Component {

    static propTypes = {
        categories: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return (
            <MenuList>
                <MenuItem>
                    <NavLinkItem to="#">categories</NavLinkItem> 
                    <ul>
                        { this.props.categories.map(category =>(
                            <li key={category.id}>
                                <NavLinkItem to={`/items/category/${category.id}`}>
                                    {category.category_name}    
                                </NavLinkItem>      
                            </li>
                        )) }
                    </ul>
                </MenuItem>     
            </MenuList>         
        );    
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, { getCategories })
(Categories);  