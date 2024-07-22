import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2 className="footer-title">MIRACLOGY</h2>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <p>&copy; MIRACLOGY - 2024 All Rights Reserved</p>
                </div>
                <div className="footer-right">
                    <p>Ready to get started?</p>
                    <button className="contact-button">Let's Talk</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
