import React from 'react';
import '../assets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <div className="footer-item">
          <div className="footer-icon">
            <img
              src="https://img.icons8.com/?size=100&id=67460&format=png&color=000000"
              alt="High Quality"
            />
          </div>
          <div className="footer-text">
            <h2>High Quality</h2>
            <p>Crafted from top materials</p>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-icon">
            <img
              src="https://img.icons8.com/?size=100&id=42234&format=png&color=000000"
              alt="Warranty Protection"
            />
          </div>
          <div className="footer-text">
            <h2>Warranty Protection</h2>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-icon">
            <img
              src="https://img.icons8.com/?size=100&id=48721&format=png&color=000000"
              alt="Free Shipping"
            />
          </div>
          <div className="footer-text">
            <h2>Free Shipping</h2>
            <p>Order over Rp 50.000</p>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-icon">
            <img
              src="https://img.icons8.com/?size=100&id=112508&format=png&color=000000"
              alt="24/7 Support"
            />
          </div>
          <div className="footer-text">
            <h2>24/7 Support</h2>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
