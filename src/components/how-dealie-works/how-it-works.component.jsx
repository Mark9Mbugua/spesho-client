import React from 'react';
import {
    StepsSection
} from './how-it-works.styles';

import { 
    SectionTitle,
    Description,
    SubTitle,
    Summary,
    SummaryImg,
    SummaryBody,
    SummaryDetails,
    Content,
    ImgContainer,
} from '../about-us/about-us.styles';

import logoIcon from '../../images/logo-icon.svg';
import feedbackIcon from '../../images/feedback.svg';

const HowItWorks = () => {
    return (
        <StepsSection>
            <SummaryBody>
                <SectionTitle>
                    How it works
                </SectionTitle>
                <Summary>
                    <SummaryDetails>
                        <div>
                            <SummaryImg src={logoIcon} alt="image" />
                        </div>
                        <Content>
                            <SubTitle>We Share Deals</SubTitle>
                            <Description>
                                We find and share deals and coupons across a wide variety of products
                                and retailers  
                            </Description>
                        </Content>
                    </SummaryDetails>
                    <SummaryDetails>
                        <ImgContainer>
                            <SummaryImg src={feedbackIcon} alt="image" />
                        </ImgContainer>
                        <Content>
                            <SubTitle>Community Votes</SubTitle>
                            <Description>
                                Our community votes and offers helpful feedback on the best deals 
                            </Description>
                        </Content>
                    </SummaryDetails>
                </Summary>
            </SummaryBody>
        </StepsSection>
    )
}

export default HowItWorks
