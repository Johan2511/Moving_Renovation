import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Map from '../Map/Map';

const ContactSection = ({children}) => {
 

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-2/2  overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Map />
        </div>
        <div className="lg:w-1/3 md:w-120 mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

