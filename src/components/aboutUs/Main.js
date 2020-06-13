import React from 'react';
import {
    AboutUsContainer,
    SubSection,
    Description,
    IntroDescription,
    IntroTitle,
    Introduction,
    IntroSection,
    Section,
    SectionTitle,
    SubTitle,
    Summary,
    SummaryImg,
    SummaryBody,
    SummaryDetails,
    SummarySection,
    Products,
    ProductContainer,
    ProductImg,
    ProductName,
    ImageContainer,
    Content,
    ImgContainer,
    CategoriesSection
} from './about-us.styles';
import logoIcon from '../../images/logo-icon.svg';
import feedbackIcon from '../../images/feedback.svg';
import guaranteeIcon from '../../images/guarantee.svg';
import hotDealIcon from '../../images/hot-deal.svg';
import babyIcon from '../../images/baby.svg';
import beautyIcon from '../../images/beauty.svg';
import computingIcon from '../../images/computing.svg';
import fashionIcon from '../../images/fashion.svg';
import healthIcon from '../../images/health.svg';
import householdIcon from '../../images/household.svg';
import homeIcon from '../../images/stay-home.svg';
import phoneIcon from '../../images/phone.svg';
import tvIcon from '../../images/tv.svg';

const Main = () => {
    return (
        <AboutUsContainer>
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
            <SummarySection>
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
            </SummarySection>
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
                                    approved by our community and examined by deal editors. Only the best are picked for Frontpage display. 
                                    These deals are remarkable for their value, quality, scarcity or timeliness. 
                                </Description>
                            </Content>
                        </SummaryDetails>   
                    </Summary>
                </SummaryBody>
            </SummarySection>
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
        </AboutUsContainer>
    )
}

export default Main
