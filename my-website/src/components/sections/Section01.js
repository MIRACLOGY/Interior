import React, { useState } from 'react';
import mainImage3 from '../imgs/역삼동 작업실/20201018_221759.JPG';
import mainImage1 from '../imgs/사당동작업실/20200905_153055.JPG';
import mainImage2 from '../imgs/서초동오피스텔부스/20210418_194500.JPG';
import './Section01.css';

const images = [mainImage1, mainImage2, mainImage3];

const Section01 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="section-01">
            <div className="image-container">
                <img src={images[currentImageIndex]} alt="Main Section" className="main-image" />
                <button className="view-projects-button">View projects</button>
                <button className="prev-button" onClick={handlePrevClick}>&lt;</button>
                <button className="next-button" onClick={handleNextClick}>&gt;</button>
            </div>
        </section>
    );
};

export default Section01;