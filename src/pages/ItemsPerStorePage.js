import React from 'react';
import ItemsPerStore from '../components/items/ItemsPerStore';
import Footer from '../components/common/Footer';


const ItemsPerStorePage = (props) => {
    console.log(props)
    return (
        <div>
            <ItemsPerStore id={props.match.params.id} />
            <Footer />
        </div>
    )
}

export default ItemsPerStorePage