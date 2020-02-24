import React from 'react';
import ItemsPerCategory from '../components/items/ItemsPerCategory';
import Footer from '../components/common/Footer';


const ItemsPerCategoryPage = (props) => {
    const { id } = props.match.params
    return (
        <div>
            <ItemsPerCategory id={id} />
            <Footer />
        </div>
    )
}

export default ItemsPerCategoryPage
