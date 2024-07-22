import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="menu-icon" onClick={toggleSidebar}>
                    <i className="fas fa-bars"></i>
                </div>
                <h1 className="site-title">DESIGN MIRACLOGY</h1>
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
            </div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/detail">Detail</a></li>
                </ul>
            </div>
            {sidebarOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
        </header>
    );
};

export default Header;
