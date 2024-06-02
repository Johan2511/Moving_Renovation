import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-4">
      <Link to="#" className="mr-4 hover:filter hover:grayscale"><FaFacebook size={24} color="#1877F2" /></Link>
      <Link to="https://www.instagram.com/moving_renovation/" className="mr-4 hover:filter hover:grayscale"><FaInstagram size={24} color="#C13584" /></Link>
      <Link to="#" className="mr-4 hover:filter hover:grayscale"><FaLinkedin size={24} color="#0A66C2" /></Link>
      <Link to="#" className="mr-4 hover:filter hover:grayscale"><FaGoogle size={24} color="#DB4437" /></Link>
    </div>
  );
};

export default SocialMedia;
