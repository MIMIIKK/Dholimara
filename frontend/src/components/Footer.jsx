import React from 'react';
import '../styles/Footer.css';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  const phoneNumber = '+977123456';
  const emailAddress = 'info@dholimara.com';
  const location = 'Jalpa, Palpa, Nepal';
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className='footer-logo'>DHOLIMARA</div>
        <div className="footer-column">
          <ul>
            <li><i class="fa-solid fa-phone"></i> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></li>
            <li><i class="fa-solid fa-envelope"></i> <a href={`malito:${emailAddress}`}>{emailAddress}</a> </li>
            <li><i class="fa-solid fa-location-dot"></i> <a 
            href="https://www.google.com/maps/place/Dholimara,+Jalpa+32500/@27.7929076,83.733988,15z/data=!3m1!4b1!4m6!3m5!1s0x3995d2cf1185e169:0xac0d283908dfee49!8m2!3d27.792908!4d83.733988!16s%2Fg%2F11smqyrt71?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer">{location}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <p>Follow Us</p>
          <div className="social-links">
            <a href="https://www.facebook.com/dholimaraShots" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} DHOLIMARA   |   All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
