import React from 'react';
import ItemsPerCategory from '../components/items/ItemsPerCategory';
import Footer from '../components/common/Footer';


const ItemsPerCategoryPage = (props) => {
    return (
        <div>
            <ItemsPerCategory id={props.match.params.id} />
            <Footer />
        </div>
    )
}

export default ItemsPerCategoryPage
