import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Gallery = ()=>{
    useEffect(()=>{
        document.title = 'DHOLIMARA | GALLERY';
    }, []);
    return(
        <div>

            <Navbar />
            <HeroSection />
        This is gallery
        <Footer />
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    )
}

export default Gallery;