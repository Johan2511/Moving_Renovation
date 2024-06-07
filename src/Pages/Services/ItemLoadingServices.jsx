import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery";
import ItemJunkImg from "../../assets/itemJunk.jpg";
import ItemJunkMovingImg from "../../assets/ItemJunkMoving.jpg";
import Footer from '../../components/Footer/Footer';

const ItemLoadingServices = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection
        backgroundImage={ItemJunkImg}
        title="Item Junk Moving"
        paragraph="We specialize in the efficient and responsible removal of unwanted items, ensuring your space is clutter-free and clean."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
      />
      <Information 
        mediaContent={ItemJunkMovingImg}
        title='BEST JUNK REMOVAL SERVICE IN ATLANTA'
        paragraph="One of our primary services is junk removal. We are your top choice for eliminating unwanted items. Our dedicated team handles and disposes of all items responsibly, ensuring your space is left clean and organized. Whether you're clearing out your home, office, or storage unit, Moving Renovation is here to help you declutter efficiently and responsibly."
        buttonLink="tel:6789733935"
        buttonText="Call Us Now At 678-973-3935"
        mediaType={ItemJunkMovingImg} 
      />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default ItemLoadingServices;