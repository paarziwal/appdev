import React from 'react';
import '../../assets/css/Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className='confot'>
      <div className="contact-info">
        <p>Contact us: prajwalpandi@gmail.com</p>
        <p>Phone: +91 9969696999</p>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* Add more social links as needed */}
      </div>
      <div className="copyright">
        <p>&copy; 2024 EduConnect Cloud Admit. All rights reserved.</p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
