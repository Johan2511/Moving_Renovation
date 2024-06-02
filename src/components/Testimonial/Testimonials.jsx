import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostrar tres elementos a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: false, // Configuración para hacer el carrusel horizontal
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Cambiar a dos elementos a la vez en pantallas más pequeñas
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Cambiar a un elemento a la vez en pantallas aún más pequeñas
          slidesToScroll: 1,
          
        }
      },
      {
          breakpoint: 390,
          settings: {
            slidesToShow: 1, // Cambiar a un elemento a la vez en pantallas más pequeñas
            slidesToScroll: 1
          }
      }
    ]
  };
  return (
    <section className="text-gray-600 body-font">
      <h2 className="text-4xl sm:text-6xl text-orange-500 text-center font-extrabold mb-12">TESTIMONIALS</h2>
      <div className="container px-5 py-24 mx-auto">
        <Slider {...settings}>
              
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mx-auto" src="https://dummyimage.com/302x302" />
                <p className="leading-relaxed text-ellipsis">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mx-auto" src="https://dummyimage.com/300x300" />
                <p className="leading-relaxed text-ellipsis">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mx-auto" src="https://dummyimage.com/305x305" />
                <p className="leading-relaxed text-ellipsis">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

