import React from "react";
import Navbar from '../../component/Navbar/Navbar';
import Slideshow from '../../component/Slideshow/Slideshow';

import "../Landing/Landing.css";
import About from "../../component/About/About";


function Landing() {
    return (
        <div className="landing-main-container">

            <Navbar />
            <Slideshow />
            <About />

        </div>
    );
}

export default Landing;