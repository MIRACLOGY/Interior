import React from 'react';
import { default as image1, default as image4 } from '../imgs/역삼동 작업실/20201018_221759.JPG';
import { default as image2 } from '../imgs/사당동작업실/20200905_153055.JPG';
import image3 from '../imgs/서초동오피스텔부스/20210418_194500.JPG';

import './Section03.css';

const Section03 = () => {
    return (
        <section className="section-03">
            <div className="text-container">
                <h2>Example</h2>
            </div>
            <div className="image-grid">
                <div className="top">
                    <div className="image-item small-top-left">
                        <img src={image1} alt="Design 1" />
                    </div>
                    <div className="image-item large-top-right">
                        <img src={image2} alt="Design 2" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="image-item large-bottom-left">
                        <img src={image3} alt="Design 3" />
                    </div>
                    <div className="image-item small-bottom-right">
                        <img src={image4} alt="Design 4" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section03;
