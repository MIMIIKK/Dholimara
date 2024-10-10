import React, { useEffect, useState } from 'react';
import '../styles/ImageSlider.css';

const ImageSlider = () => {
    const Images = [
        '/homepage1.jpg',
        '/homepage2.jpg',
        '/maruni.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [Images.length]);

    return (
        <div className='image-container'>
            {Images.map((src, index) => (
                <img
                    key={index}
                    alt={`Slide ${index + 1}`}
                    src={src}
                    className={`zoom-image ${index === currentIndex ? 'active' : 'hidden'}`} />
            ))};

            <div className='floating-content'>
                <h1>WELCOME TO<h1 className='villageName'>DHOLIMARA</h1></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore culpa, est eius sequi qui dolorum doloribus impedit voluptatum veniam hic.</p>
            </div>
        </div>

    );
};

export default ImageSlider;