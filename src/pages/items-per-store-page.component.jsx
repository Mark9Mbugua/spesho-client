import React from 'react';
import ItemsPerStore from '../components/items/items-per-store';
import Footer from '../components/common/Footer';


const ItemsPerStorePage = (props) => {
    const { id } = props.match.params
    return (
        <div>
            <ItemsPerStore id={id} />
        </div>
    )
}

export default ItemsPerStorePage