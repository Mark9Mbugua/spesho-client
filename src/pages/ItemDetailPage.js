import React from 'react';
import ItemDetail from '../components/itemDetail/ItemDetail';
import Footer from '../components/common/Footer';


const ItemDetailPage = (props) => {
    const { id } = props.match.params
    return (
        <div>
            <ItemDetail id={id}/>
            <Footer/>  
        </div>
    )
}

export default ItemDetailPage
