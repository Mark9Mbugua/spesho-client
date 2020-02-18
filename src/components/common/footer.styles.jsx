import styled from 'styled-components';

export const FooterContainer = styled.footer`
  .footer-middle {
    background: ${ props => props.theme.primary };
    padding-top: 3rem;
    color: #fff;
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: rgba(109, 109, 109);
  }
  ul li a:hover {
    color: rgba(172, 172, 172);
  }
`;