import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Contact = ()=>{
    useEffect(()=>{
        document.title = 'DHOLIMARA | CONTACT';
    }, []);
    return (
        <div>
            <Navbar />
            <HeroSection />
            This is contact.
            <Footer />
        </div>
    )
}

export default Contact;