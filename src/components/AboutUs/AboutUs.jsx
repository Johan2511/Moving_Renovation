import React from 'react';
import MissionImage from '/src/assets/mission.jpg';
import VisionImage from '/src/assets/vision.jpg'; 
import WhoWeAreImage from '/src/assets/AboutUs.jpg'; 

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center mb-8 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img src={MissionImage} alt="Mission" className="w-full lg:w-2/3 h-48 object-cover rounded-lg lg:mr-6 mb-4 lg:mb-0 transform transition duration-500 hover:scale-110" />
        <div>
          <h3 className="text-orange-400 text-3xl font-semibold mb-4">Mission</h3>
          <p className="text-gray-700 lg:text-2xl">
            To provide every home, office, and storage space with the highest quality service, delivered with love and responsibility.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row-reverse items-center mb-8 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img src={VisionImage} alt="Vision" className="w-full lg:w-2/3 h-48 object-cover rounded-lg lg:ml-6 mb-4 lg:mb-0 transform transition duration-500 hover:scale-110" />
        <div>
          <h3 className="text-orange-400 text-3xl font-semibold mb-4 text-center lg:text-left">Vision</h3>
          <p className="text-gray-700 lg:text-2xl">
            To become a major company generating employment, recognized by our clients as the best in the sector.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img src={WhoWeAreImage} alt="Who We Are" className="w-full lg:w-3/3 h-48 object-cover rounded-lg lg:mr-6 mb-4 lg:mb-0 transform transition duration-500 hover:scale-110" />
        <div>
          <h3 className="text-orange-400 text-3xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-700 lg:text-2xl">
            We are a company with 5 years of experience, created with the goal of providing the best service. We are dedicated not only to moving your items but also to taking care of them, offering our clients the best solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;



