import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <header className="header">
            <div className="menu-icon" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </div>
            <Link to="/Interior" className="site-title">DESIGN MIRACLOGY</Link>
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
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/Interior">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    {/* <li><a href="/detail">Detail</a></li> */}
                    <li className="mobile-social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
            {sidebarOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
        </header>
    );
};

export default Header;
