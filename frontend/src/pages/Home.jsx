import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import '../styles/Images.css';
import '../styles/Homepage.css';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
    useEffect(() => {
        document.title = 'DHOLIMARA';
    }, []);
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ImageSlider />
            <div className='home-herosection'>
                <p className='slogan'>Discover the Tranquility Within our Village</p>
                <p className='hero-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda vel fugit, accusamus voluptatem, similique harum laborum dicta ipsa sapiente pariatur id! Obcaecati error asperiores totam ullam, debitis voluptatem provident.
                </p>
                <button className='learn-more'> <i class="fa-solid fa-lightbulb"></i>  Learn More</button>
            </div>
            <div className='about-us'>
                <div className='about-us-content'>
                    <p className='slogan-about'>About Dholimara</p>
                    <p className='slogan-title-about'>A Paradise Village</p>
                    <p className='about-content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi a quo perspiciatis deleniti necessitatibus voluptates! Ducimus nostrum doloremque ea voluptatibus, dolorum esse sit blanditiis fuga aut ad tempora cupiditate.
                    </p>
                    <Link to='/about'>
                        <button className='learn-more-about'> <i class="fa-solid fa-lightbulb"></i>  Learn More</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;