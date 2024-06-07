import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../ButtonCall/ButtonCall';
// import Form from '../Form/Form2'
import "./Hero.css"

const HeroSection = ({backgroundImage, title, paragraph, buttonText, buttonLink}) => {

  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Cuando al menos la mitad del elemento es visible
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section 
      className="body-font bg-cover bg-center relative" 
      style={{ 
        backgroundImage: `url(${imageLoaded ? backgroundImage : ''})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        minHeight: '90vh',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Superposición semitransparente */}
      <div className="container mx-auto px-5 py-24 lg:flex lg:flex-row flex-col items-center justify-start relative"> {/* Ajuste de clase flex y z-index */}
        <div className="lg:w-1/2 md:w-full w-full lg:pl-24 md:pl-16 flex flex-col md:items-start items-start text-left mb-16 lg:mb-0">
        <h1 ref={elementRef} className={`title-font text-center sm:text-5xl lg:text-6xl text-4xl mb-4 font-bold text-orange-600 ${isVisible ? 'title-animation' : ''}`} style={{textStroke: '1px black', WebkitTextStroke: '1px white'}} >{title}</h1>
          <p className="text-justify mb-6 leading-relaxed font-medium text-base sm:text-2xl text-white">{paragraph}</p>
          <Button link={buttonLink} text={buttonText} />
        </div>
        <div className="lg:w-1/2 lg:justify-end">
          {/* <Form/> */}
          
        </div>
      </div>
      <img
        src={isVisible ? backgroundImage : ''}
        alt=""
        style={{ display: 'none' }}
        onLoad={handleImageLoad}
      />
    </section>
  );
};

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired
};

export default HeroSection;



