import styled from 'styled-components';

export const FooterContainer = styled.footer`
  ul li a {
    color: rgba(109, 109, 109);
  }
  ul li a:hover {
    color: rgba(172, 172, 172);
  }
`;

export const FooterMiddle = styled.div`
  background: ${ props => props.theme.primary };
  padding-top: 3rem;
  color: #fff;
`;

export const FooterBottom = styled.div`
  padding-top: 3rem;
  padding-bottom: 2rem;
`;