import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-4">
      <Link to="https://www.facebook.com/profile.php?id=61560511067077" className="mr-4 p-2 rounded-full hover:bg-white transition-all duration-300">
        <FaFacebook size={32} color="#1877F2" />
      </Link>
      <Link to="https://www.instagram.com/moving_renovation/" className="mr-4 p-2 rounded-full hover:bg-white transition-all duration-300">
        <FaInstagram size={32} color="#C13584" />
      </Link>
      <Link to="#" className="mr-4 p-2 rounded-full hover:bg-white transition-all duration-300">
        <FaGoogle size={32} color="#DB4437" />
      </Link>
    </div>
  );
};

export default SocialMedia;

