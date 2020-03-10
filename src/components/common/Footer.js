import React from 'react';
import { FooterContainer } from './footer.styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <li>
                    <a href="#"><TwitterIcon /> Twitter</a>
                </li>
                <li>
                    <a href="#"><FacebookIcon /> Facebook</a>
                </li>
                <li>
                    <a href="#"><InstagramIcon /> Instagram</a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>About</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Advertising Opportunities</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>RSS Feeds</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Frontpage Deals</a>
                </li>
                <li>
                  <a href="#">Popular Deals</a>
                </li>
                <li>
                  <a href="#">Trending Deals</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>More</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Deal Alerts</a>
                </li>
                <li>
                  <a href="#">Dealie Live</a>
                </li>
                <li>
                  <a href="#">Jumia</a>
                </li>
                <li>
                  <a href="#">Kilimall</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Dealie - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;