import React, { useRef, useEffect, useState } from 'react';
import server from '../../assets/Server.jpg';
import payment from '../../assets/payment.jpg';
import communication from '../../assets/communication.jpg';

const GallerySection = () => {
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
      threshold: 0.5
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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 ref={elementRef} className={`title-font text-center md:text-4xl lg:text-6xl text-3xl mb-4 font-extrabold text-orange-400 ${isVisible ? 'title-animation' : ''}`}>
            WHY CHOOSE MOVING_RENOVATION
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base lg:text-2xl">
            There is no one you can trust like the crew at Moving_Renovation. With a team of professional, trustworthy and clean-cut young men, we provide a dependable and stress-free experience from point A to point B.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <GalleryItem imgSrc={isVisible ? server : ''} title="CUSTOMER SERVICE" description="Our main goal is to provide you with a stress-free journey. We guarantee that our movers will do everything in their power to complete your move quickly and efficiently." />
          <GalleryItem imgSrc={isVisible ? payment : ''} title="PAYMENT" description="You only pay for the minutes our moving helpers work. This means that you will not be required to pay on the day of your move. There are no hidden costs." />
          <GalleryItem imgSrc={isVisible ? communication : ''} title="COMMUNICATION" description="We send confirmation messages via text and email to verify your moving time, moving date, and hourly rates. Additionally, we'll give you a call when the crew is on its way." />
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ imgSrc, title, description }) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex flex-col h-full border-4 border-gray-200 bg-white transition duration-300 hover:shadow-2xl transform hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img alt={title} className="w-full h-80 object-cover object-center transition duration-500 transform hover:scale-110" src={imgSrc} />
        </div>
        <div className="p-6 flex-grow">
          <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">{title}</h2>
          <p className="leading-relaxed lg:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;













// import React, { useRef, useEffect, useState } from 'react';
// // import nosotrosimg from '../../assets/nosotros.webp'
// import server from '../../assets/Server.jpg'
// import payment from '../../assets/payment.jpg'
// import communication from '../../assets/communication.jpg'


// const GallerySection = () => {

//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       });
//     }, {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5 // Cuando al menos la mitad del elemento es visible
//     });

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);
  
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col text-center w-full mb-20">
//         <h2 ref={elementRef} className={`title-font text-center md:text-4xl lg:text-6xl text-3xl mb-4 font-extrabold text-orange-400 ${isVisible ? 'title-animation' : ''}`} >WHY CHOOSE MOVING_RENOVATION</h2>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base lg:text-2xl">There is no one you can trust like the crew at Moving_Renovation. With a team of professional, trustworthy and clean-cut young men, we provide a dependable and stress-free experience from point A to point B.</p>
//         </div>
//         <div className="flex flex-wrap -m-4">
//           <GalleryItem imgSrc={server} title="CUSTOMER SERVICE" description="Our main goal is to provide you with a stress-free journey. We guarantee that our movers will do everything in their power to complete your move quickly and efficiently." />
//           <GalleryItem imgSrc={payment} title="PAYMENT" description="You only pay for the minutes our moving helpers work. This means that you will not be required to pay on the day of your move. There are no hidden costs." />
//           <GalleryItem imgSrc={communication} title="COMMUNICATION" description="We send confirmation messages via text and email to verify your moving time, moving date, and hourly rates. Additionally, we'll give you a call when the crew is on its way." />
//         </div>
//       </div>
//     </section>
//   );
// };

// const GalleryItem = ({ imgSrc, title, description }) => {
//   return (
//     <div className="lg:w-1/3 sm:w-1/2 p-4">
//       <div className="flex flex-col h-full border-4 border-gray-200 bg-white transition duration-300 hover:shadow-lg">
//         <img alt={title} className="w-full h-80 object-cover object-center" src={imgSrc} />
//         <div className="p-8">
//           <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">{title}</h2>
//           <p className="leading-relaxed lg:text-2xl">{description}</p>
//         </div>
//       </div>
//     </div>
//   );

// };

// export default GallerySection;



// const [selectedCard, setSelectedCard] = useState(null);
//   const refCard = useRef(null);

//   const handleCardSelect = (cardId) => {
//     setSelectedCard(selectedCard === cardId ? null : cardId);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (refCard.current && !refCard.current.contains(event.target)) {
//         setSelectedCard(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };


// return(
//   <div>
//     <h2 className="mt-10 title-animation title-font text-center sm:text-5xl lg:text-7xl text-3xl mb-4 font-extrabold text-orange-600">WHY CHOOSE MOVING_RENOVATION</h2>
    
//   <div className='wrapper-gallery'>
//     <div className="container-gallery">
//     <input type="radio" name="slide" id="c1" checked={selectedCard === "c1"} onChange={() => handleCardSelect("c1")} />
//     <label htmlFor="c1" className={`card-gallery ${selectedCard === "c1" ? 'open' : ''}`} ref={refCard} >
//         <div className="row-gallery">
//           <div className="icon-gallery">1</div>
//           <div className="description-container">
//             <h4>CUSTOMER SERVICE</h4>
//             <p>Our main goal is to provide you with a stress-free journey. We guarantee that our movers will do everything in their power to complete your move quickly and efficiently.</p>
//           </div>
//         </div>
//       </label>

//       <input type="radio" name="slide" id="c2" checked={selectedCard === "c2"} onChange={() => handleCardSelect("c2")} />
//       <label htmlFor="c2" className={`card-gallery ${selectedCard === "c2" ? 'open' : ''}`}>
//         <div className="row-gallery">
//           <div className="icon-gallery">2</div>
//           <div className="description-container">
//             <h4>PAYMENT</h4>
//             <p>You only pay for the minutes our moving helpers work. This means that you will not be required to pay on the day of your move. There are no hidden costs.</p>
//           </div>
//         </div>
//       </label>

//       <input type="radio" name="slide" id="c3" checked={selectedCard === "c3"} onChange={() => handleCardSelect("c3")} />
//       <label htmlFor="c3" className={`card-gallery ${selectedCard === "c3" ? 'open' : ''}`}>
//         <div className="row-gallery">
//           <div className="icon-gallery">3</div>
//           <div className="description-container">
//             <h4>COMMUNICATION</h4>
//             <p>We send confirmation messages via text and email to verify your moving time, moving date, and hourly rates. Additionally, we'll give you a call when the crew is on its way.</p>
//           </div>
//         </div>
//       </label>
//     </div>
//   </div>
// </div>
// );
