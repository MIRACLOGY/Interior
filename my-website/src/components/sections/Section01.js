import React, { useState } from 'react';
import mainImage3 from '../imgs/역삼동 작업실/1.jpg';
import mainImage1 from '../imgs/사당동 작업실/1.jpg';
import mainImage2 from '../imgs/서초동 오피스텔 부스/1.jpg';
import './Section01.css';

const images = [mainImage1, mainImage2, mainImage3];

const Section01 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeTransition, setFadeTransition] = useState(false);

    const handlePrevClick = () => {
        setFadeTransition(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            setFadeTransition(false);
        }, 500); // 500ms 동안 전환 효과 적용
    };

    const handleNextClick = () => {
        setFadeTransition(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            setFadeTransition(false);
        }, 500); // 500ms 동안 전환 효과 적용
    };

    return (
        <section className="section-01">
            <div className="image-container">
                <img
                    src={images[currentImageIndex]}
                    alt="Main Section"
                    className={`main-image ${fadeTransition ? 'fade-out' : 'fade-in'}`}
                />
                <button className="view-projects-button">View projects</button>
                <button className="prev-button" onClick={handlePrevClick}>&lt;</button>
                <button className="next-button" onClick={handleNextClick}>&gt;</button>
            </div>
        </section>
    );
};

export default Section01;
