import React, { useEffect, useState } from 'react';
import { default as slideImage3, default as slideImage6 } from '../imgs/역삼동 작업실/20201018_221759.JPG';
import { default as slideImage1, default as slideImage4 } from '../imgs/사당동작업실/20200905_153055.JPG';
import { default as slideImage2, default as slideImage5 } from '../imgs/서초동오피스텔부스/20210418_194500.JPG';
import './Section02.css';

const images = [slideImage1, slideImage2, slideImage3, slideImage4, slideImage5, slideImage6];

const Section02 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sliderLength = isMobile ? 2 : 4;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - sliderLength : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= images.length - sliderLength ? 0 : prevIndex + 1));
    };

    const handleSliderChange = (event) => {
        const newIndex = Math.floor((event.target.value / 100) * (images.length - sliderLength));
        setCurrentIndex(newIndex);
    };

    return (
        <section className="section-02">
            <div className="slider-container">
                <div className="slider" style={{ transform: `translateX(-${currentIndex * (100 / sliderLength)}%)` }}>
                    {images.map((image, index) => (
                        <div className="slide" key={index} style={{ width: `calc(100% / ${sliderLength} - 10px)` }}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="additional-slider">
                <div className="slider-bar-container">
                    <input
                        type="range"
                        className="slider-bar"
                        min="0"
                        max="100"
                        value={(currentIndex / (images.length - sliderLength)) * 100}
                        onChange={handleSliderChange}
                    />
                </div>
                <button className="slider-button" onClick={handlePrevClick}>&lt;</button>
                <button className="slider-button" onClick={handleNextClick}>&gt;</button>
            </div>
        </section>
    );
};

export default Section02;
