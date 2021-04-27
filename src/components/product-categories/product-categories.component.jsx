import React from 'react';

import {
    Products,
    ProductImg,
    ProductName,
    ProductContainer,
    CategoriesSection
} from './product-categories.styles';

import {
    SectionTitle,
    ImageContainer,
} from '../about-us/about-us.styles';

import babyIcon from '../../images/baby.svg';
import beautyIcon from '../../images/beauty.svg';
import computingIcon from '../../images/computing.svg';
import fashionIcon from '../../images/fashion.svg';
import healthIcon from '../../images/health.svg';
import householdIcon from '../../images/household.svg';
import homeIcon from '../../images/stay-home.svg';
import phoneIcon from '../../images/phone.svg';
import tvIcon from '../../images/tv.svg';

const ProductCategories = () => {
    return (
        <CategoriesSection>
            <SectionTitle>
                A wide variety of categories
            </SectionTitle>
            <Products>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImg src={phoneIcon} alt="image" />
                    </ImageContainer>
                    <ProductName>Phones</ProductName>
                </ProductContainer>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImg src={babyIcon} alt="image" />
                    </ImageContainer>
                    <ProductName>Baby Products</ProductName>
                </ProductContainer>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImg src={beautyIcon} alt="image" />
                    </ImageContainer>
                    <ProductName>Beauty</ProductName>
                </ProductContainer>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImg src={computingIcon} alt="image" />
                    </ImageContainer>
                    <ProductName>Computing</ProductName>
                </ProductContainer>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImg src={fashionIcon} alt="image" />
                    </ImageContainer>
                    <ProductName>Fashion</ProductName>
                </ProductContainer>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImg src={healthIcon} alt="image" />
                    </ImageContainer>
                    <ProductName>Health</ProductName>
                </ProductContainer>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImg src={householdIcon} alt="image" />
                    </ImageContainer>
                    <ProductName>HouseHold</ProductName>
                </ProductContainer>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImg src={tvIcon} alt="image" />
                    </ImageContainer>
                    <ProductName>Electronics</ProductName>
                </ProductContainer>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImg src={homeIcon} alt="image" />
                    </ImageContainer>
                    <ProductName>Stay Safe!</ProductName>
                </ProductContainer>
            </Products>
        </CategoriesSection>
    )
}

export default ProductCategories
