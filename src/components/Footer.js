// Footer.js
import React from 'react';
import './Footer.css'; // Optional: CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer style={{ background: '#F0FFE5', padding: '20px' }}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          {"Lorem ipsum Dolor Sit Amet Aut ipsam IIllum"}
          <input type='text' placeholder='Enter Your Email Address'/>
          <button className='btn btn-success m-3'>SUBSCRIBE</button>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help and Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants and Pots</li>
            <li>Gardening Tools</li> 
          </ul>
        </div>

        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li>My Account</li>
            <li>Orders and Returns</li>
            <li>Track Order</li>
            <li>Terms and Conditions</li> 
            <li>Privacy Policy</li> 
            <li>Returns, Refund and Replacement Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get In Touch</h3>
          {"Address:F-262,First Floor, Sushant Lok Phase-2,Sector-57, Gurgaan,Haryana,India 122003."}
          <p>Call: +919958287272</p>
          <p>Email: care@Chaperoneplants.com</p>
        
        </div>

        
      </div>
      <div>
        <h1>CHAPERONE</h1>
        <p>Lorem Ipsum Dolor Sit Amet Aut Ipsam IIIlum Et Nostrum Quidem aut necessitattibus enim ut internos accusantium anumquam autem ab rerum omnis.Non molestiae ratione et laborum doloribus aut voluptates ut porro excepturi sit molestioe abcaecati qui quis beatae estvoluptatem eius.
            Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
        </p>
      </div>
      <div className="footer-section">
          <h3>Follow Us On</h3>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} size="2x" style={{ marginRight: '10px', cursor: 'pointer' }} />
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '10px', cursor: 'pointer' }} />
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ cursor: 'pointer' }} />
          </div>
        </div>
    </footer>
  );
}

export default Footer;
