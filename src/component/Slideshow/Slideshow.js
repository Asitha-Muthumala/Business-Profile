import React from "react";
import "../Slideshow/Slideshow.css";
import sampleImg1 from '../../asset/Pictures/sampleImg1.jpg';
import sampleImg2 from '../../asset/Pictures/sampleImg2.jpg';
import sampleImg3 from '../../asset/Pictures/sampleImg3.jpg';
import sampleImg4 from '../../asset/Pictures/sampleImg4.jpg';

import { Carousel } from 'antd';

function Slideshow() {
    return (
        <div className="slideShow-container">

            <Carousel autoplay>
                <div className="slideShow-slide">
                    <div className="slideShow-image-container">
                        <img src={sampleImg1} className="slideShow-image" alt="" />
                        <div className="slideShow-text">Text 1</div>
                    </div>
                </div>

                <div className="slideShow-slide">
                    <div className="slideShow-image-container">
                        <img src={sampleImg2} className="slideShow-image" alt="" />
                        <div className="slideShow-text">Text 1</div>
                    </div>
                </div>

                <div className="slideShow-slide">
                    <div className="slideShow-image-container">
                        <img src={sampleImg3} className="slideShow-image" alt="" />
                        <div className="slideShow-text">Text 1</div>
                    </div>
                </div>

                <div className="slideShow-slide">
                    <div className="slideShow-image-container">
                        <img src={sampleImg4} className="slideShow-image" alt="" />
                        <div className="slideShow-text">Text 1</div>
                    </div>
                </div>
            </Carousel>

        </div>
    );
}

export default Slideshow;