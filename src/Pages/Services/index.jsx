import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from '../../components/Hero/Hero';
import OurServicesJPG from "../../assets/OurServices.jpg"
import OurServicesWebP from "../../assets/OurServices.webp"
import Service from '../../components/Service/Service';
import Footer from '../../components/Footer/Footer';

const supportsWebP = () => {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};


const Services = () => {
  const ourServicesImg = supportsWebP() ? OurServicesWebP : OurServicesJPG;

  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection
        backgroundImage={ourServicesImg}
        title="Our Moving Services"
        paragraph="Moving Renovation offers comprehensive residential and commercial moving services on streets and neighborhoods throughout the state of Georgia."
        paragraph2="In addition, we provide furniture disassembly and assembly services for each move."
        paragraph3="See the full list of services below. If you are ready to take advantage of our services, click the button to call us today and you will receive personalized information."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
      />
      <Service />
      <Footer />
    </div>
  );
};

export default Services;

