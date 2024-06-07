import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <nav className="bg-slate-800 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Menu Toggle Button for Mobile */}
                <button 
                    data-collapse-toggle="navbar-menu" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-menu" 
                    aria-expanded={isMenuOpen} 
                    onClick={handleMenuToggle}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? <IoClose className="w-7 h-7" /> : <IoMenu className="w-7 h-7" />}
                </button>

                {/* Navigation Links */}
                <div className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-menu">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className="block py-2 px-3 md:text-white md:hover:text-orange-500">Home</Link>
                        </li>
                        <li className="relative">
                            <button 
                                id="dropdownNavbarLink" 
                                data-dropdown-toggle="dropdownNavbar" 
                                className="flex items-center justify-between w-full py-2 px-3 md:text-white md:hover:text-orange-500 md:w-auto dark:text-white" 
                                aria-controls="dropdownNavbar" 
                                aria-expanded={isDropdownOpen} 
                                onClick={handleDropdownToggle}
                            >
                                Our Service <MdOutlineArrowDropDown className="w-2.5 h-2.5 ms-2.5" />
                            </button>
                            <div 
                                id="dropdownNavbar" 
                                className={`absolute left-0 mt-2 z-10 ${isDropdownOpen ? '' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <Link to="/my-service" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/residential" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Residential Moving</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/commercial" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Commercial Moving</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/apartment" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Apartment Moving</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/longDistanceMoving" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Long Disntance Moving</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/furniture-assembly" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Furniture Assembly</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/ItemLoadingServices" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Item Junk Moving</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/packingUnpacking" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Packing / Unpacking</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="/AboutUs" className="block py-2 px-3 md:text-white md:hover:text-orange-500">About Us</Link>
                        </li>
                        <li>
                            <Link to="/ContactUS" className="block py-2 px-3 md:text-white md:hover:text-orange-500">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <SocialMedia />
            </div>
        </nav>
    );
};

export default NavBar;


