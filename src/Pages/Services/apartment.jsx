import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery";
import ApartmentJPG from "../../assets/apartment_moving.jpg";
import ApartmentWebP from "../../assets/apartment_moving.webp";
import MovingVideo from "../../assets/Moving_Renovation_video3.mp4";
import Footer from '../../components/Footer/Footer';

const supportsWebP = () => {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};


const Apartment = () => {
  const apartmentImg = supportsWebP() ? ApartmentWebP : ApartmentJPG;

  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection
        backgroundImage={apartmentImg}
        title="Apartment Moving"
        paragraph="Moving from the third floor to the third floor? Let our team handle the heavy lifting."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
      />
      <Information
        backgroundMedia=""
        mediaContent={MovingVideo}
        title="TRUSTWORTHY APARTMENT MOVERS IN ATLANTA"
        paragraph="At Moving Renovation Atlanta, our knowledgeable and athletic movers will take care of your next move. We handle all the hard work for you, ensuring a smooth and efficient transition for your condo or apartment."
        paragraph2="Moving from the first floor to the third floor? No problem for our team. Have a long walk to the freight elevator? We have the tools and experience to speed up the process."
        paragraph3="We are committed to providing the best apartment and condo moving services in Georgia. Call us today to book your move or use our convenient online reservation service."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
        mediaType="video"
      />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Apartment;
