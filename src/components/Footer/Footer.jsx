import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';
import Logo from '../Logo/Logo';

const Footer = () => {
  const footerNavs = [
    { name: "Our Services", href: "/my-service" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Contact Us", href: "/ContactUs" },
    
]
  return (
    <div className='bg-orange-400'>
      <footer className="text-white bg-orange-400 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center text-center ">
                  <Logo />
                <p className="leading-relaxed mt-2 text-[15px]">
                moving renovation is a company with the vision of helping all families
                in their important process of moving anywhere at any time.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0 text-center">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx} className=" hover:text-gray-800">
                            <Link to={item.href} title={item.name}>
                                { item.name }
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="bg-white rounded-xl p-4 mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0 text-black text-center">
                    &copy; 2024 Moving_Renovation All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <SocialMedia />
                </div>
            </div>
      </footer>
    </div>
  );
};

export default Footer;
