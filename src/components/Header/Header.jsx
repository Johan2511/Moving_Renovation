import React from 'react';
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';
import './Header.css';  // Importamos los estilos adicionales

const Header = () => {
  return (
    <header className="bg-orange-500 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row lg:justify-center">
        
        <div className="w-full lg:w-auto flex justify-center lg:justify-center mb-4 lg:mb-0">
          <Link to="/" className="text-4xl flex justify-center">
            <Logo />
          </Link>
        </div>
        
        <div className="flex-grow flex justify-center">
          <div className="text-center max-w-lg">
            <h2 className="text-3xl font-semibold text-white animate-fade-in">Moving Renovations</h2>
            <p className="text-base mt-2 hidden sm:block">
              Is a company with the vision of helping all families
              <br />
              in their important process of moving anywhere at any time.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



