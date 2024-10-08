import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Explore = ()=>{
    useEffect(()=>{
        document.title = 'DHOLIMARA | EXPLORE';
    }, []);
    return(
        <div>
            <Navbar />
            <HeroSection />
           <Footer />
        </div>
    )
}

export default Explore;