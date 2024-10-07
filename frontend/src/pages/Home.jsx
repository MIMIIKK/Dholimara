import React, {useEffect} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import '../styles/Images.css';

const Home = ()=> {
    useEffect(()=>{
        document.title = 'DHOLIMARA';
    }, []);
    return(
        <div>
            <Navbar />
            <HeroSection />
            <img src='/homepage1.jpg' className='responsive-image' />
            Welcome To DHOLIMARA
            <Footer />
            </div>
    )
}

export default Home;