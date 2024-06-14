import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery";
import CommercialJPG from "../../assets/moving_comercial.jpg";
import CommercialWebP from "../../assets/moving_comercial.webp";
import MovingVideo from "../../assets/Moving_Renovation_video2.mp4";
import Footer from '../../components/Footer/Footer';

const supportsWebP = () => {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};


const Commercial = () => {
  const commercialImg = supportsWebP() ? CommercialWebP : CommercialJPG;

  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection
        backgroundImage={commercialImg}
        title="Commercial Moving"
        paragraph="No office is too big or small. Our expert team handles every detail to ensure a smooth transition for your business."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
      />
      <Information
        backgroundMedia=""
        mediaContent={MovingVideo}
        title="BEST COMMERCIAL MOVERS IN ATLANTA"
        paragraph="Our professional specialists ensure successful planning for all corporate moves, large or small. We handle everything from safely transferring expensive equipment to maintaining business operations during the move."
        paragraph2="We understand that time is money. Our goal is to move your company quickly and efficiently, ensuring minimal disruption while maintaining attention to detail and professionalism."
        paragraph3="Our courteous staff is dedicated to customer care and efficiency. From planning and packing to handling special equipment and reassembly, we ensure every aspect of your corporate move is seamless and within budget."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
        mediaType="video"
      />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Commercial;

