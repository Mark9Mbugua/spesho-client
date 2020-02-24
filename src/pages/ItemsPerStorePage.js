import React from 'react';
import ItemsPerStore from '../components/items/ItemsPerStore';
import Footer from '../components/common/Footer';


const ItemsPerStorePage = (props) => {
    const { id } = props.match.params
    return (
        <div>
            <ItemsPerStore id={id} />
            <Footer />
        </div>
    )
}

export default ItemsPerStorePage