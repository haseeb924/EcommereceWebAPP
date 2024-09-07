import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src="your-logo.png" alt="Logo" /> {/* Replace with your logo */}
          <p>
            Suspendisse quis sodales nunc. Sed ligula enim, mattis ut sem id,
            mollis sagittis sapien.
          </p>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Pages</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Product Category</a></li>
              <li><a href="#">Product Single</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Blog Post</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#" style={{ color: '#3166e2' }}>More Templates</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Utility</h4>
            <ul>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">404</a></li>
              <li><a href="#">Password</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-subscribe">
          <h4>Join Our List Today!</h4>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
          <p>
            By subscribing you agree to our 
            <a href="#" style={{ color: '#3166e2' }}> Privacy Policy </a>
            and provide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
