import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import HeroSection from '../../components/Hero/Hero';
import Information from "../../components/Information/Information";
import GallerySection from "../../components/Gallery/Gallery";
import ItemJunkJPG from "../../assets/itemJunk.jpg";
import ItemJunkWebP from "../../assets/itemJunk.webp";
import ItemJunkMovingJPG from "../../assets/ItemJunkMoving.jpg";
import ItemJunkMovingWebP from "../../assets/ItemJunkMoving.webp";
import Footer from "../../components/Footer/Footer";

const supportsWebP = () => {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};


const ItemLoadingServices = () => {
  const itemJunkImg = supportsWebP() ? ItemJunkWebP : ItemJunkJPG;
  const itemJunkMovingImg = supportsWebP() ? ItemJunkMovingWebP : ItemJunkMovingJPG;

  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection
        backgroundImage={itemJunkImg}
        title="Item Junk Moving"
        paragraph="We specialize in the efficient and responsible removal of unwanted items, ensuring your space is clutter-free and clean."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
      />
      <Information 
        mediaContent={itemJunkMovingImg}
        title='BEST JUNK REMOVAL SERVICE IN ATLANTA'
        paragraph="One of our primary services is junk removal. We are your top choice for eliminating unwanted items. Our dedicated team handles and disposes of all items responsibly, ensuring your space is left clean and organized. Whether you're clearing out your home, office, or storage unit, Moving Renovation is here to help you declutter efficiently and responsibly."
        buttonLink="tel:6789733935"
        buttonText="Call Us Now At 678-973-3935"
        mediaType="image"
      />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default ItemLoadingServices;
