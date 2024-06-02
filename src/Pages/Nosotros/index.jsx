import React from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/Hero/Hero';
import AboutUsImg from '../../assets/AboutUs.jpg';
import AboutUs2Img from '../../assets/nosotros.webp';
import Information from '../../components/Information/Information';

const AboutPage = () => {
  return (
    <div>
        <Header />
        <NavBar />
        <HeroSection
            backgroundImage={AboutUsImg}
            title="About Moving Renovation"
            paragraph="Moving Renovation is a growing moving company. Our moving team will assist you throughout the state of Georgia with reliable, clean and professional moving companies that will make your move stress-free from point A to point B."
            buttonText="Call Us Now At 678-973-3935"
            buttonLink="tel:6789733935"
        />
        <Information
            mediaContent={AboutUs2Img} 
            title='OUR PROMISE TO YOU'
            paragraph='Our focus is to make your move as affordable and stress-free as possible by hiring professional and trainable young men who will always work hard to provide excellent customer service.'
            buttonText="Call Us Now At 678-973-3935"
            buttonLink="tel:6789733935"
            mediaType="image"
        />
        <Footer />
    </div>
  );
};

export default AboutPage;
