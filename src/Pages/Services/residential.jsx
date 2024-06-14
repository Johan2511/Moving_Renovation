import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery";
import ResidentialJPG from '../../assets/residential_moving.jpg';
import ResidentialWebP from '../../assets/residential_moving.webp';
import Footer from '../../components/Footer/Footer';

const supportsWebP = () => {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};


const Residential = () => {
  const residentialImg = supportsWebP() ? ResidentialWebP : ResidentialJPG;

  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection
        backgroundImage={residentialImg}
        title="Residential Moving"
        paragraph="On-time arrival. Efficient loading. Careful unloading. Moving made easy. Trust the experts at Moving Renovation Atlanta for all your local moving needs, whether you're moving to or from Atlanta."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
      />
      <Information
        backgroundMedia=''
        mediaContent={residentialImg}
        title='BEST RESIDENTIAL MOVERS IN ATLANTA'
        paragraph="As one of the best residential and local moving companies in Georgia, Moving Renovation is your top choice for your next move."
        paragraph2="Our team ensures that all major furniture items are properly padded and wrapped, treating your belongings with the utmost care."
        paragraph3=" Whether you are moving across town or across the state, Moving Renovation is the company you can trust to safely transport your belongings from point A to point B. Our team is experienced, efficient, and friendly."
        paragraph4=" Moving can be a stressful time; let us help make it easier. Give us a call or take advantage of our convenient online booking!"
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
        mediaType='image' 
      />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Residential;
