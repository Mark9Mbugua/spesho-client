import React from 'react';

import {
    SubSection,
} from './contact-us.styles';

import { 
    SectionTitle,
    Description, 
} from '../about-us/about-us.styles';

const ContactUs = () => {
    return (
        <SubSection>
            <SectionTitle>
                Contact Us 
            </SectionTitle>
            <Description>
                Email: dealieco@gmail.com
            </Description>
            <Description>
                Phone: +254712340908
            </Description>
        </SubSection>
    )
}

export default ContactUs
