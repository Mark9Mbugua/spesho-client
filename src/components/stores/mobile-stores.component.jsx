import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStores } from '../../redux/actions/stores';
import { 
    ListContainer,
    MobileMenuList,
    MobileMenuListItem,
    ListLink
} from '../common/mobileMenuList.styles';

const MobileStores = ({ getStores, stores }) => {
    useEffect(() => {
        getStores();
    }, []);

    return (
        <ListContainer>
            <h4>All Deal Stores</h4>
             <MobileMenuList>
                {stores.map(store =>(
                    <MobileMenuListItem key={store.id}>
                        <ListLink 
                            to={`/items/store/${store.id}`} 
                        >
                            {store.store_name}    
                        </ListLink>      
                    </MobileMenuListItem>
                )) }
            </MobileMenuList>
        </ListContainer>
    )
}

const mapStateToProps = state => ({
    stores: state.stores.stores
});

export default connect(mapStateToProps, { getStores })(MobileStores)
