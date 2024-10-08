import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import '../styles/Images.css';
import '../styles/Homepage.css';

const About = () => {
    useEffect(() => {
        document.title = 'DHOLIMARA | ABOUT';
    }, []);
    return (
        <div>
            <Navbar />
            <HeroSection />
            <img src='./homepage2.jpg' className='responsive-image'></img>
            <Footer />
        </div>
    )
}

export default About;