import React from 'react';
import ItemCard from '../common/Card';

const ItemsContainer = (props) => {
    const { items } = props

    return (
        <div className="container">
            <div className="row">
                {items.map(item => (
                    <div className="col-xs-6 m-2">
                        <ItemCard
                            key={item.id} 
                            imageSrc={item.src} 
                            title={item.deal_title}
                            price={item.price}
                            oldPrice={item.original_price}
                            discount={item.discount}
                            description={item.description}
                            dealUrl={item.deal_url}
                        />
                    </div>
                ))}
            </div>
    </div>
    )
}

export default ItemsContainer
