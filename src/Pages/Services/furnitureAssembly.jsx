import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery"
import AssemblyJPG from "../../assets/Assembly_moving.jpg"
import AssemblyWebP from "../../assets/Assembly_moving.webp"
import MovingVideo from "../../assets/Moving_Renovation_video4.mp4"
import Footer from '../../components/Footer/Footer';

const supportsWebP = () => {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

const FurnitureAssembly = () => {
  const assemblyImg = supportsWebP() ? AssemblyWebP : AssemblyJPG;

  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection
        backgroundImage={assemblyImg}
        title="Furniture Assembly"
        paragraph="We’re here to make your furniture assembly hassle-free. From beds to IKEA furniture, let us handle it for you."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
      />
      <Information 
        mediaContent={MovingVideo}
        title='FURNITURE ASSEMBLY SERVICES IN ATLANTA'
        paragraph="Assembling and disassembling furniture can be a pain. It's time consuming and tedious. Leave it to our expert team. Basic tools are included in the move."
        paragraph2="Our supervisor will take care of assembling your bed, cot, dresser, IKEA furniture, or anything else you need help with. Customer service is our top priority, and it shows in every step we take."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
        mediaType="video"
      />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default FurnitureAssembly;
