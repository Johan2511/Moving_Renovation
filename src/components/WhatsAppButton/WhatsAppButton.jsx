import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const WhatsAppButton = ({ link }) => {
    return (
        <button  className="fixed bottom-20 right-8 z-50 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
            <Link to={link}>
                <FaPhoneAlt size={32} />
            </Link>
        </button>
    );
};

export default WhatsAppButton;
