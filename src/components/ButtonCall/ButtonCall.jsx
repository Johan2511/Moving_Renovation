import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Button = ({ link, text }) => {
  return (
    <Link 
      to={link} 
      className="inline-flex items-center justify-center text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg"
      role="button"
      aria-label={text}
    >
      <FaPhoneAlt className="mr-2" aria-hidden="true" />
      {text}
    </Link>
  );
};

export default Button;
