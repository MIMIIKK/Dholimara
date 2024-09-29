import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const About = ()=>{
    useEffect(()=>{
        document.title = 'DHOLIMARA | ABOUT';
    }, []);
    return(
        <div>
            <Navbar />
            <HeroSection />
            This is About page
            <Footer />
        </div>
    )
}

export default About;