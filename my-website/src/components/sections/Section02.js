import React, { useState } from 'react';
import slideImage3 from '../imgs/역삼동 작업실/20201018_221759.JPG';
import { default as slideImage1, default as slideImage4 } from '../imgs/사당동작업실/20200905_153055.JPG';
import { default as slideImage2, default as slideImage5 } from '../imgs/서초동오피스텔부스/20210418_194500.JPG';
import './Section02.css';

const images = [slideImage1, slideImage2, slideImage3, slideImage4, slideImage5];

const Section02 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 4 ? 0 : prevIndex + 1));
    };

    return (
        <section className="section-02">
            <div className="slider-container">
                <button className="slider-button prev-button" onClick={handlePrevClick}>&lt;</button>
                <div className="slider" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                    {images.map((image, index) => (
                        <div className="slide" key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="slider-button next-button" onClick={handleNextClick}>&gt;</button>
            </div>
        </section>
    );
};

export default Section02;
