import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../ButtonCall/ButtonCall';
import './information.css'; 

const Information = ({backgroundMedia, mediaContent, title, paragraph, paragraph2, paragraph3, buttonText, buttonLink, mediaType}) => {
  const [isVisible, setIsVisible] = useState(false);
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

  const renderMedia = () => {
    if (mediaType === 'video') {
      return (
        <video className="w-full h-full object-cover object-center" controls autoPlay loop muted>
          <source src={mediaContent} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img alt="" className="media-filter w-full h-full object-cover object-center" src={mediaContent} />
      );
    }
  };

  return (
    <section className="body-font bg-cover bg-center" style={{backgroundImage: `url(${backgroundMedia})`, height: 'auto'}}>
      <div className="container mx-auto px-5 py-24 lg:flex lg:flex-row flex-col items-center justify-start">
        <div className="lg:w-1/2 md:w-full w-full lg:pl-24 md:pl-16 flex flex-col md:items-start items-start text-left mb-16 lg:mb-0 lg:mr-8">
        <h2 ref={elementRef} className={`title-font text-center sm:text-5xl lg:text-7xl text-4xl mb-4 font-extrabold text-orange-400 ${isVisible ? 'title-animation' : ''}`}>{title}</h2>
          <p className="mb-6 leading-relaxed font-semibold text-base text-gray-600">{paragraph}</p>
          <p className="mb-6 leading-relaxed font-semibold text-base text-gray-600">{paragraph2}</p>
          <p className="mb-6 leading-relaxed font-semibold text-base text-gray-600">{paragraph3}</p>
          <Button link={buttonLink} text={buttonText} />
        </div>
        <div className="lg:w-1/3 lg:justify-end">
          {renderMedia()}
        </div>
      </div>
    </section>
  );
};

Information.propTypes = {
  backgroundMedia: PropTypes.string.isRequired,
  mediaContent: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  paragraph3: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  mediaType: PropTypes.oneOf(['image', 'video']).isRequired
};

export default Information;
