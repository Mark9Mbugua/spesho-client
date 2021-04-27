import React from 'react';
import ItemDetail from '../components/item-detail/item-detail.component';
import Footer from '../components/common/Footer';


const ItemDetailPage = ({match, user}) => {
    const { id } = match.params;
    //console.log(user);
    return (
        <div>
            <ItemDetail 
                id={id}
                user={user}
            />
            <Footer/>  
        </div>
    )
}

export default ItemDetailPage
