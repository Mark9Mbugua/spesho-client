import React from 'react';
import { AboutUsContainer } from './about-us.styles';
import Intro from '../intro/intro.component';
import HowItWorks from '../how-dealie-works/how-it-works.component';
import OurCommitment from '../our-commitment/our-commitment.component';
import ProductCategories from '../product-categories/product-categories.component';
import ContactUs from '../contact-us/contact-us.component';

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <Intro />
            <HowItWorks />
            <OurCommitment />
            <ProductCategories />
            <ContactUs />
        </AboutUsContainer>
    );
}

export default AboutUs
