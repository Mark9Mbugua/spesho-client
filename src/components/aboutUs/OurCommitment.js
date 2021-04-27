import React from 'react';
import {
    Description,
    SectionTitle,
    SubTitle,
    Summary,
    SummaryImg,
    SummaryBody,
    SummaryDetails,
    SummarySection,
    Content,
    ImgContainer
} from './about-us.styles';
import guaranteeIcon from '../../images/guarantee.svg';
import hotDealIcon from '../../images/hot-deal.svg';

const OurCommitment = () => {
    return (
        <SummarySection>
            <SummaryBody>
                <SectionTitle>
                    Our commitment
                </SectionTitle>
                <Summary>
                    <SummaryDetails>
                        <ImgContainer>
                            <SummaryImg src={guaranteeIcon} alt="image" />
                        </ImgContainer>
                        <Content>
                            <SubTitle>Only the most reputable of merchants will be listed</SubTitle>
                            <Description>
                                Our Frontpage features only deals from
                                merchants who have earned a solid reputation based on user feedback 
                                from previous deals posted on Slickdeals.  
                            </Description>
                        </Content>
                    </SummaryDetails>
                    <SummaryDetails>
                        <div>
                            <SummaryImg src={hotDealIcon} alt="image" />
                        </div>
                        <Content>
                            <SubTitle>Only the best, hand-picked deals will be posted</SubTitle>
                            <Description>
                                Frontpage deals are selected from the pool of deals that has been 
                                approved by our community and examined by deal editors. 
                                Only the best are picked for Frontpage display. 
                                These deals are remarkable for their value, quality, scarcity or timeliness. 
                            </Description>
                        </Content>
                    </SummaryDetails>   
                </Summary>
            </SummaryBody>
        </SummarySection>
    )
}

export default OurCommitment
