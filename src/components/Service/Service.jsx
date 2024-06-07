// src/Service.js
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiHouseLineDuotone, PiBuildingApartmentDuotone, PiArmchair } from "react-icons/pi";
import { RiTruckLine } from "react-icons/ri";
import { FaMapMarkedAlt, FaTruckLoading } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import Preview from './Preview';

const servicesData = [
  {
    title: 'Residential Moving',
    description: 'Residential moving service.',
    previewDescription: 'Arrive on time. Load. Unload. We make it that easy. Connect with the pros at Falcon Moving Atlanta if you\'re looking for local movers to assist you with your move to or from Atlanta.',
    slug: '/my-service/residential',
    icon: PiHouseLineDuotone,
    image: '/src/assets/Hero.jpg' 
  },
  {
    title: 'Apartment Moving',
    description: 'Apartment moving service.',
    previewDescription: 'Moving from the third floor to the third floor? Let our team handle the heavy lifting.',
    slug: '/my-service/apartment',
    icon: PiBuildingApartmentDuotone,
    image: '/src/assets/apartment_moving.jpg'
  },
  {
    title: 'Commercial Moving',
    description: 'Commercial moving service.',
    previewDescription: 'No office is too big or small. Our expert team handles every detail to ensure a smooth transition for your business..',
    slug: '/my-service/commercial',
    icon: RiTruckLine,
    image: '/src/assets/moving_comercial.jpg'
  },
  {
    title: 'Long Distance Moving',
    description: 'Long-distance moving service.',
    previewDescription:'While we specialize in moves within Atlanta, we are equally prepared and excited to assist with your long-distance relocations.',
    slug: '/my-service/longDistanceMoving',
    icon: FaMapMarkedAlt,
    image: '/src/assets/LongDistanceMoving.jpg'
  },
  {
    title: 'Furniture Assembly Moving',
    description: 'Furniture assembly and moving service.',
    previewDescription:'We’re here to make your furniture assembly hassle-free. From beds to IKEA furniture, let us handle it for you.',
    slug: '/my-service/furniture-assembly',
    icon: PiArmchair,
    image: '/src/assets/Assembly_moving.jpg'
  },
  {
    title: 'Item Junk Moving',
    description: 'Junk Moving service.',
    previewDescription:'We specialize in the efficient and responsible removal of unwanted items, ensuring your space is clutter-free and clean.',
    slug: '/my-service/ItemLoadingServices',
    icon: FaTruckLoading,
    image: '/src/assets/ItemJunkMoving.jpg'
  },
  {
    title: 'Packing / Unpacking',
    description: 'Packing and unpacking service.',
    slug: '/my-service/packingUnpacking',
    icon: FaBoxesPacking,
    image: '/src/assets/packing.jpg'
  }
];

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preview, setPreview] = useState({ image: '', text: '', position: { top: 0, left: 0 } });
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

  const handleMouseEnter = (event, previewDescription, image) => {
    const rect = event.target.getBoundingClientRect();
    setPreview({
      image,
      text: previewDescription,
      position: { top: rect.bottom + window.scrollY, left: rect.left + window.scrollX }
    });
  };

  const handleMouseLeave = () => {
    setPreview({ image: '', text: '', position: { top: 0, left: 0 } });
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 ref={elementRef} className={`title-font text-center sm:text-5xl lg:text-7xl text-4xl mb-4 font-extrabold text-orange-400 ${isVisible ? 'title-animation' : ''}`}>OUR SERVICE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <Link key={service.slug} to={`${service.slug}`}>
              <div 
                className="bg-white p-6 rounded-lg shadow-md flex items-center"
                onMouseEnter={(e) => handleMouseEnter(e, service.previewDescription, service.image)}
                onMouseLeave={handleMouseLeave}
              >
                <service.icon className="text-6xl text-gray-500 mr-2" style={{ color: 'orange' }} />
                <div>
                  <h3 className="text-3xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-base text-gray-700">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Preview image={preview.image} text={preview.text} position={preview.position} />
    </section>
  );
};

export default Service;
