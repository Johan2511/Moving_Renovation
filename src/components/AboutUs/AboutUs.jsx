import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import MissionImage from '/src/assets/mission.jpg';
import VisionImage from '/src/assets/vision.jpg'; 
import WhoWeAreImage from '/src/assets/AboutUs.jpg'; 

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center mb-8 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="w-full h-48 md:h-40 lg:h-48 lg:w-80 overflow-hidden rounded-lg md:mr-4 lg:mr-6 mb-4 md:mb-0">
          <LazyLoadImage src={MissionImage} alt="Mission" effect='blur' threshold={10} className="w-full h-full object-cover transform transition duration-500 hover:scale-110" />
        </div>
        <div>
          <h3 className="text-orange-400 text-3xl font-semibold mb-4 text-center">Mission</h3>
          <p className="text-gray-700 md:text-xl lg:text-2xl text-center">
            To provide every home, office, and storage space with the highest quality service, delivered with love and responsibility.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row-reverse items-center mb-8 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="w-full h-48 md:h-40 lg:h-48 lg:w-80 overflow-hidden rounded-lg md:ml-4 lg:ml-6 mb-4 md:mb-0">
          <LazyLoadImage src={VisionImage} alt="Vision" effect='blur' threshold={10} className="w-full h-full object-cover transform transition duration-500 hover:scale-110" />
        </div>
        <div>
          <h3 className="text-orange-400 text-3xl font-semibold mb-4 text-center">Vision</h3>
          <p className="text-gray-700 md:text-xl lg:text-2xl text-center">
            To become a major company generating employment, recognized by our clients as the best in the sector.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center mb-8 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="w-full h-48 md:h-40 lg:h-48 lg:w-80 overflow-hidden rounded-lg md:mr-4 lg:mr-6 mb-4 md:mb-0">
          <LazyLoadImage src={WhoWeAreImage} alt="Who We Are" effect='blur' threshold={10} className="w-full h-full object-cover transform transition duration-500 hover:scale-110" />
        </div>
        <div>
          <h3 className="text-orange-400 text-3xl font-semibold mb-4 text-center">Who We Are</h3>
          <p className="text-gray-700 md:text-xl lg:text-2xl text-center">
            We are a company with 5 years of experience, created with the goal of providing the best service. We are dedicated not only to moving your items but also to taking care of them, offering our clients the best solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;







