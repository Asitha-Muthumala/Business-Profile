import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Slideshow from "../component/Slideshow";
import About from "../component/About";
import Galary from "../component/Galary";
import Package from "../component/Package";
import Feedback from "../component/Feedback";
import Contact from "../component/Contact";

function Landing() {
    return (
        <div>
            <Navbar />
            <Slideshow />
            <About />
            <Galary />
            <Package />
            <Feedback />
            <Contact />
            <Footer />
        </div>
    );
}

export default Landing;