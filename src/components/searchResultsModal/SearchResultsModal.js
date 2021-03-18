import React from 'react';

import { ResultsContainer } from './SearchResultsModal.styles';

const SearchResultsModal = ({input, filteredItems}) => {
    return (
        <ResultsContainer>
            {
                filteredItems.length == 0 && input.length == 0 ?
                    <p>Start typing to search.</p>
                :
                    filteredItems.length == 0 && input.length > 0 ?
                    <p>No search results found.</p>
                :
                    filteredItems.map((val, key) =>{
                        return (
                            <div className='item' key={key}>
                                <p>{val.deal_title}</p>
                                <p>Price: {val.price}</p>
                                <p>Original price: {val.original_price}</p>
                                <p>Discount: {val.discount}%</p>
                                <p>Category: {val.category.category_name}</p>
                                <p>Store: {val.store.store_name}</p>
                            </div>
                        );
                    })
            }
        </ResultsContainer>
    )
}

export default SearchResultsModal
