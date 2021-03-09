import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../actions/categories';
import { 
    ListContainer,
    MobileMenuList,
    MobileMenuListItem,
    ListLink
} from '../common/mobileMenuList.styles';

const MobileCategories = ({ getCategories, categories }) => {
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <ListContainer>
            <h4>All Deal Categories</h4>
             <MobileMenuList>
                {categories.map(category =>(
                    <MobileMenuListItem key={category.id}>
                        <ListLink 
                            to={`/items/category/${category.id}`}
                        >
                            {category.category_name}    
                        </ListLink>      
                    </MobileMenuListItem>
                )) }
            </MobileMenuList>
        </ListContainer>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, { getCategories })(MobileCategories)
