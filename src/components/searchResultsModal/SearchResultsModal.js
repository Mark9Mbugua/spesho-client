import React from 'react';
import { Link } from 'react-router-dom';

import { 
    ResultsContainer,
    EmptySearch,
    CardContainer,
    ResultsImage,
    ImageContainer,
    ResultDetailsContainer,
    SearchItemLink
} from './SearchResultsModal.styles';

const SearchResultsModal = ({input, filteredItems, closeSearchResultsModal}) => {
    return (
        <ResultsContainer
            filteredItems={filteredItems}
        >
            {
                filteredItems.length == 0 && input.length == 0 ?
                    <EmptySearch>Start typing to search.</EmptySearch>
                :
                    filteredItems.length == 0 && input.length > 0 ?
                    <EmptySearch>No search results found.</EmptySearch>
                :
                    filteredItems.map((val, key) =>{
                        return (
                            <SearchItemLink 
                                to={`/items/${val.id}`}
                                onClick={closeSearchResultsModal}
                            >
                                <CardContainer key={key}>
                                    <ImageContainer>
                                        <ResultsImage src={val.src} />
                                    </ImageContainer>
                                    <ResultDetailsContainer>
                                        <p>{val.deal_title}</p>
                                        <p>Price: {val.price}</p>
                                        <p>Original price: {val.original_price}</p>
                                        <p>Discount: {val.discount}%</p>
                                        <p>Category: {val.category.category_name}</p>
                                        <p>Store: {val.store.store_name}</p>
                                    </ResultDetailsContainer>
                                </CardContainer>
                            </SearchItemLink>
                        );
                    })
            }
        </ResultsContainer>
    )
}

export default SearchResultsModal
