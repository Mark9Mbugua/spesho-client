import React from 'react';
import { 
    SavedItemsContainer,
    PageTitle,
    UpperSection
} from './saved-items.styles';

const SavedItems = () => {
    return (
        <SavedItemsContainer>
            <PageTitle>Saved Items</PageTitle>
            <UpperSection>
                <p>No list found</p>
            </UpperSection>
        </SavedItemsContainer>
    );
}

export default SavedItems
