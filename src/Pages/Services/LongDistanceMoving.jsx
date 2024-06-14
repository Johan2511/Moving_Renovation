import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery";
import LongDistanceJPG from "../../assets/LongDistance.jpg";
import LongDistanceWebP from "../../assets/LongDistance.webp";
import LongDistanceUsJPG from "../../assets/LongDistanceUs.jpg";
import LongDistanceUsWebP from "../../assets/LongDistanceUs.webp";
import Footer from '../../components/Footer/Footer';

const supportsWebP = () => {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};



const LongDistanceMoving = () => {
  const longDistanceImg = supportsWebP() ? LongDistanceWebP : LongDistanceJPG;
  const longDistanceUsImg = supportsWebP() ? LongDistanceUsWebP : LongDistanceUsJPG;

  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection
        backgroundImage={longDistanceUsImg}
        title="Long Distance Moving"
        paragraph="While we specialize in moves within Atlanta, we are equally prepared and excited to assist with your long-distance relocations."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
      />
      <Information 
        mediaContent={longDistanceImg}
        title="BEST RESIDENTIAL MOVERS IN ATLANTA"
        paragraph="As one of the best residential and local moving companies in Georgia, we are the ideal choice to handle your next move. Our committed team meticulously quilts and wraps all important furniture, ensuring the safety of your belongings. Whether you're moving locally or across the state, Moving Renovation is your trusted ally, ensuring a safe journey from start to finish."
        buttonLink="tel:6789733935"
        buttonText="Call Us Now At 678-973-3935"
        mediaType="image"
      />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default LongDistanceMoving;

