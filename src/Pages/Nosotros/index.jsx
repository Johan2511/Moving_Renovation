import React from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/Hero/Hero';
import AboutUsImgJPG from '../../assets/AboutUs.jpg';
import AboutUsImgWebP from '../../assets/AboutUs.webp';
import AboutUs2ImgJPG from '../../assets/nosotros.webp';
import AboutUs2ImgWebP from '../../assets/nosotros.webp';
import HeroImgJPG from "../../assets/information.jpg";
import HeroImgWebP from "../../assets/information.webp";
import Information from '../../components/Information/Information';
import AboutUs from '../../components/AboutUs/AboutUs';
import GallerySection from '../../components/Gallery/Gallery';

const AboutPage = () => {
  const supportsWebP = () => {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  const backgroundImage = supportsWebP() ? AboutUsImgWebP : AboutUsImgJPG;
  const informationBackgroundMedia = supportsWebP() ? HeroImgWebP : HeroImgJPG;
  const informationMediaContent = supportsWebP() ? AboutUs2ImgWebP : AboutUs2ImgJPG;

  return (
    <div>
      <Header />
      <NavBar />
      <HeroSection
        backgroundImage={backgroundImage}
        title="About Moving Renovation"
        paragraph="Moving Renovation is a growing moving company. Our moving team will assist you throughout the state of Georgia with reliable, clean and professional moving companies that will make your move stress-free from point A to point B."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
      />
      <Information
        backgroundMedia={informationBackgroundMedia}
        mediaContent={informationMediaContent}
        title='OUR PROMISE TO YOU'
        paragraph='Our focus is to make your move as affordable and stress-free as possible by hiring professional and trainable young men who will always work hard to provide excellent customer service.'
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935"
        mediaType="image"
      />
      <AboutUs />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default AboutPage;

