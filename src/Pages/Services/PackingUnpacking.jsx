import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery";
import PackingJPG from '../../assets/Packing.jpg';
import PackingWebP from '../../assets/Packing.webp';
import UnpackingJPG from '../../assets/Unpacking.jpg';
import UnpackingWebP from '../../assets/Unpacking.webp';
import Footer from '../../components/Footer/Footer';


const supportsWebP = () => {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};


const PackingUnpacking = () => {
  const packingImg = supportsWebP() ? PackingWebP : PackingJPG;
  const unpackingImg = supportsWebP() ? UnpackingWebP : UnpackingJPG;

  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection
        backgroundImage={packingImg}
        title="PACKING SERVICES"
        paragraph="Packing for a move can be challenging, but with our expert assistance, it becomes a seamless experience."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
      />
      <Information 
        mediaContent={unpackingImg}
        title='BEST RESIDENTIAL MOVERS IN ATLANTA'
        paragraph='A successful move begins with proper preparation. Our meticulous packing services ensure that your belongings are safeguarded throughout the relocation process.'
        paragraph2='At our company, we specialize in residential and commercial packing services. Our skilled team handles your possessions with care, utilizing industry-leading techniques and materials to guarantee their safety.'
        buttonLink="tel:6789733935"
        buttonText="Call Us Now At 678-973-3935"
        mediaType="image" 
      />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default PackingUnpacking;
