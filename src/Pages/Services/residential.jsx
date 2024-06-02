import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery"
import HeroImg from "../../assets/Moving_renovation_Hero.png"
import ResidentialImg from "../../assets/Moving_renovation_Hero.png"
import Footer from '../../components/Footer/Footer';

const Residential = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <HeroSection
        backgroundImage={HeroImg}
        title="Residential Moving"
        paragraph="Arrive on time. Load. Unload. We make it that easy. Connect with the pros at Falcon Moving Atlanta if you're looking for local movers to assist you with your move to or from Atlanta."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
        />
        <Information 
        mediaContent={ResidentialImg}
        title='BEST RESIDENTIAL MOVERS IN ATLANTA'
        paragraph='As Georgia’s #1 rated residential and local moving company there is no one else you should trust to handle your next move. Our team will properly pad and wrap all major furniture items, treating your belongings with care. Whether you are moving across town or across the state - Falcon Moving is the company you can trust to get your belongings safely from point A to B.
        Our team is experienced, efficient and friendly. Moving can be a stressful time, let us help make it easier. Give us a call or use the convenience of online booking!'
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
        mediaType={ResidentialImg} />
        <GallerySection />
        <Footer />
    </div>
  );
};

export default Residential;