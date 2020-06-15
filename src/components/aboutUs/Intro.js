import React from 'react';
import {
    IntroDescription,
    IntroTitle,
    Introduction,
    IntroSection
} from './about-us.styles';

const Intro = () => {
    return (
        <IntroSection>
            <Introduction>
                <IntroTitle>
                    What is Dealie?
                </IntroTitle>
                <IntroDescription>
                    Dealie is Kenya's first online community dedicated to sharing, 
                    rating and reviewing deals and coupons. 
                </IntroDescription>
            </Introduction>
        </IntroSection>
    )
}

export default Intro
