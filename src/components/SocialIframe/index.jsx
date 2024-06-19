import React, { useRef, useEffect, useState } from 'react';
import FacebookPageIframe from './FacebookPageIframe';
import InstagramEmbed from './InstagramEmbed';

const SocialFrame = ({ facebookPageId, instagramPostIds, title }) => {
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

  return (
    
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col text-center w-full mb-20">
          <h2 ref={elementRef} className={`title-font text-center md:text-4xl lg:text-6xl text-3xl mb-4 font-extrabold text-orange-400 ${isVisible ? 'title-animation' : ''}`}>
            {title}
          </h2>
        </div>
      <div className="w-full md:w-1/2 px-4">
        <FacebookPageIframe pageId={facebookPageId} />
      </div>
      <div className="w-full md:w-1/2 px-4">
        <div className="instagram-posts-container">
          <InstagramEmbed urls={instagramPostIds} />
        </div>
      </div>
    </div>
  );
};

export default SocialFrame;
