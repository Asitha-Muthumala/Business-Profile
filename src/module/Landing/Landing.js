import React from "react";
import Navbar from '../../component/Navbar/Navbar';
import Slideshow from '../../component/Slideshow/Slideshow';

import "../Landing/Landing.css";


function Landing() {
    return (
        <div className="landing-main-container">

            <Navbar />
            <Slideshow />

        </div>
    );
}

export default Landing;