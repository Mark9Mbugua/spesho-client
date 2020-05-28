import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../actions/categories';
import { ListContainer } from './mobileCategories-styles';

const MobileCategories = ({ getCategories, categories }) => {
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <ListContainer>
            <h4>All Deal Categories</h4>
             <ul>
                {categories.map(category =>(
                    <li key={category.id}>
                        <Link 
                            to={`/items/category/${category.id}`}
                            className='list-link' 
                        >
                            {category.category_name}    
                        </Link>      
                    </li>
                )) }
            </ul>
        </ListContainer>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, { getCategories })(MobileCategories)
