import React, {useEffect} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home = ()=> {
    useEffect(()=>{
        document.title = 'DHOLIMARA';
    }, []);
    return(
        <div>
            <Navbar />
            <HeroSection />
            <Footer />
            </div>
    )
}

export default Home;