import React, { useState } from 'react';
import './DetailPage.css';

const getProjectImages = (folderName, imageCount) => {
    let images = [];
    for (let i = 1; i <= imageCount; i++) {
        const imageName = `${process.env.PUBLIC_URL}/static/imgs/${folderName}/${i}.jpg`;
        images.push(imageName);
    }
    return images;
};

const DetailPage = ({ project, imageCount }) => {
    const images = getProjectImages(project, imageCount);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="detail-page">
            <h2>{project}</h2>
            <div className="image-slider">
                <button className="slider-buttonD prev-button" onClick={handlePrevClick}>
                    &lt;
                </button>
                <img src={images[currentIndex]} alt={`${project} image ${currentIndex + 1}`} className="slider-image" />
                <button className="slider-buttonD next-button" onClick={handleNextClick}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default DetailPage;
