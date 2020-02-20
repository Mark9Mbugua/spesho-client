import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../../actions/categories';
import { CategoriesList } from './categories-styles';

export class Categories extends Component {

    static propTypes = {
        categories: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        console.log(this.props)
        return (
            <CategoriesList>
                <li className="menu-item">
                    <Link to="#" className="link">categories</Link> 
                    <ul className="dropdown-list">
                        { this.props.categories.map(category =>(
                            <li key={category.id}>
                                <Link to={`/items/category/${category.id}`} className="link">
                                    {category.category_name}    
                                </Link>      
                            </li>
                        )) }
                    </ul>
                </li>     
            </CategoriesList>         
        );    
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, { getCategories })
(Categories);  