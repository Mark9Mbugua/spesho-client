import React from 'react';
import {
    AboutUsContainer,
    SubSection,
    Description,
    SectionTitle
} from './about-us.styles';
import Intro from './Intro';
import HowItWorks from './HowItWorks';
import OurCommitment from './OurCommitment';
import ProductCategories from './ProductCategories';
import ContactUs from './ContactUs';

const Main = () => {
    return (
        <AboutUsContainer>
            <Intro />
            <HowItWorks />
            <OurCommitment />
            <ProductCategories />
            <ContactUs />
        </AboutUsContainer>
    )
}

export default Main
