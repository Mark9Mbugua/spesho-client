import React from 'react';
import { TitleContainer } from './custom-title.styles';

const CustomTitle = ({children}) => {
    return (
        <TitleContainer>
            <h1>{children}</h1>
        </TitleContainer>
    )
}

export default CustomTitle
