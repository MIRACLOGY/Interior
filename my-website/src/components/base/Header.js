import React from 'react';
import './Header.css'; // 스타일을 추가할 경우

const Header = () => {
    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
