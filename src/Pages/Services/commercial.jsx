import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from '../../components/Hero/Hero';
import Information from '../../components/Information/Information';
import GallerySection from "../../components/Gallery/Gallery"
import CommercialImg from "../../assets/moving_comercial.jpg"
import MovingVideo from "../../assets/Moving_Renovation_video2.mp4"
import Footer from '../../components/Footer/Footer';

const Commercial = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <HeroSection
        backgroundImage={CommercialImg}
        title="Commercial Moving"
        paragraph="No office is too big or small. Our expert team handles every detail to ensure a smooth transition for your business."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
        />
        <Information 
        mediaContent={MovingVideo}
        title='BEST COMMERCIAL MOVERS IN ATLANTA'
        paragraph="Our trained, professional moving specialists help our corporate customers with the successful planning of all corporate moves, large or small. It's not easy to plan a commercial move. It's difficult enough to figure out how to transfer pricey equipment and technology safely, but companies must also figure out how to keep running even while critical supplies are packed away in boxes."
        paragraph2="In business, time is money. At Moving_Renovation Atlanta, we understand that a corporate relocation can disrupt your business. Therefore, we strive to move your company as quickly and efficiently as possible without sacrificing attention to detail, professionalism, and congeniality."
        paragraph3="Our diligent and courteous staff is dedicated to sound customer care and efficiency. Moving_Renovation Atlanta will assist with every aspect of your corporate move, from planning and professional packing to delicate special equipment handling, to delivery and reassembly. We are as dedicated to our business as you are to yours and will coordinate and execute an office moving plan that exceeds your expectation, but not your budget."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
        mediaType="video" />
        <GallerySection />
        <Footer />
    </div>
  );
};

export default Commercial;