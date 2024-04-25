import React from "react";
import Navbar from '../../component/Navbar/Navbar';
import Slideshow from '../../component/Slideshow/Slideshow';
import Contact from '../../component/Contact/Contact';

import "../Landing/Landing.css";
import About from "../../component/About/About";
import Footer from "../../component/Footer/Footer";


function Landing() {
    return (
        <div className="landing-main-container">

            <Navbar />
            <Slideshow />
            <About />
            <Contact />
            <Footer />

        </div>
    );
}

export default Landing;