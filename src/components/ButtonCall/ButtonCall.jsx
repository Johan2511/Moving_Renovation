import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Button = ({ link, text }) => {
  return (
    <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
      <Link to={link} className='flex items-center'>
        <FaPhoneAlt className='mr-2'/>
        {text}
      </Link>
    </button>
  );
};

export default Button;