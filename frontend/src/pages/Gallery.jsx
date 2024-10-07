import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import '../styles/Images.css';

const Gallery = ()=>{
    useEffect(()=>{
        document.title = 'DHOLIMARA | GALLERY';
    }, []);
    return(
        <div>

            <Navbar />
            <HeroSection />

            <div className='gallery-container'>
                <div className='maruni'>
            <img src='/maruni.jpg' alt='Maruni Dance' className='responsive-image' />
            <h2 className='content-title'>MARUNI</h2>
            <p className='content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis cumque corrupti ipsum similique quas temporibus non quibusdam debitis repellat impedit, in corporis voluptatum ad, aliquam totam sit. Est sed rerum in fuga id, velit ut sint itaque ratione ex natus consequatur perspiciatis molestias ad sequi nostrum atque repellat eveniet dolorum. Iure possimus temporibus illo voluptas illum, autem consequuntur, hic ratione nulla reiciendis quasi culpa libero totam quibusdam saepe ipsam pariatur. Sunt minus ad totam mollitia voluptatibus quam eum laudantium dicta, impedit unde reiciendis laboriosam nostrum repellat consequuntur ullam repudiandae porro alias rerum iste commodi fuga praesentium incidunt possimus? Magnam cumque accusamus nemo officia laborum eveniet ducimus esse nostrum placeat corporis? Id libero repudiandae qui repellat explicabo? Laboriosam, libero ducimus.
            </p>
            </div>
            <div className='ghatu'>
                <img src='/maruni.jpg' alt='Ghatu Dance' className='responsive-image' />
                <h2 className='content-title'>GHATU</h2>
                <p className='content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi rerum, corporis, perspiciatis similique eos illum, adipisci asperiores itaque inventore maxime consequuntur doloremque optio? Laborum tempora quis mollitia consectetur dignissimos.
                </p>
            </div>
            </div>
        <Footer />
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    )
}

export default Gallery;