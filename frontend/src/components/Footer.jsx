import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className='footer-logo'>DHOLIMARA</div>
        <div className="footer-column">
          <ul>
            <li><i class="fa-solid fa-phone"></i> +977 123 7890</li>
            <li><i class="fa-solid fa-envelope"></i> info@dholimara.com</li>
            <li><i class="fa-solid fa-location-dot"></i> Jalpa, Palpa, Nepal</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>Follow Us</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 DHOLIMARA   |   All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
