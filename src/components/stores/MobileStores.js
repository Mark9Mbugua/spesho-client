import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStores } from '../../actions/stores';
import { ListContainer } from '../categories/mobileCategories-styles';

const MobileStores = ({ getStores, stores }) => {
    useEffect(() => {
        getStores();
    }, []);

    return (
        <ListContainer>
            <h4>All Deal Stores</h4>
             <ul>
                {stores.map(store =>(
                    <li key={store.id}>
                        <Link 
                            to={`/items/store/${store.id}`}
                            className='list-link' 
                        >
                            {store.store_name}    
                        </Link>      
                    </li>
                )) }
            </ul>
        </ListContainer>
    )
}

const mapStateToProps = state => ({
    stores: state.stores.stores
});

export default connect(mapStateToProps, { getStores })(MobileStores)
