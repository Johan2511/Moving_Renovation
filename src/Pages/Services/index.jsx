import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from '../../components/Hero/Hero';
import HeroImg from "../../assets/Moving_renovation_Hero.png"
import Service from '../../components/Service/Service';
import Footer from '../../components/Footer/Footer';


const Services = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <HeroSection
        backgroundImage={HeroImg}
        title="Our Moving Services"
        paragraph="Moving Renovation offers comprehensive residential and commercial moving services on streets and neighborhoods throughout the state of Georgia. In addition, we provide furniture disassembly and assembly services for each move. See the full list of services below. If you are ready to take advantage of our services, click the button to call us today and you will receive personalized information."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
        />
        <Service />
        <Footer />
    </div>
  );
};

export default Services;