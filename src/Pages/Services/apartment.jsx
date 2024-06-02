import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery"
import HeroImg from "../../assets/Moving_renovation_Hero.png"
import MovingVideo from "../../assets/Moving_Renovation_video3.mp4"
import Footer from '../../components/Footer/Footer';

const Apartment = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <HeroSection
        backgroundImage={HeroImg}
        title="Apartment Moving"
        paragraph="3rd floor to 3rd floor? Let our guys do the hard work."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
        />
        <Information 
        mediaContent={MovingVideo}
        title='TRUSTWORTHY APARTMENT MOVERS IN ATLANTA'
        paragraph="At Moving Renovation Atlanta,  our knowledgeable and athletic movers will take care of your next  move. We will take care of all the hard work for you. We have the  experience and professionalism necessary to move your  condo or apartment  quickly and efficiently. "
        paragraph2="From the first floor to the third floor? My guys have no problems. Do you have a long walk to the freight elevator? We have the tools and experience to  speed up the process."
        paragraph3="We are committed to providing the best apartment or condo moving services in  Georgia. Call us  today to book your transfer or use our convenient online reservation service."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
        mediaType="video" />
        <GallerySection />
  
        <Footer />
    </div>
  );
};

export default Apartment;