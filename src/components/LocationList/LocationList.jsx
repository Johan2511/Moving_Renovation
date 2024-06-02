import React from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LocationList = ({ locations, title, description }) => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-orange-400">{title}</h2>
      <p className="mb-4">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center">
            <FaMapMarkerAlt className="mr-2" style={{ color: 'orange' }} />
            {location}
          </div>
        ))}
      </div>
    </div>
  );
};

LocationList.propTypes = {
    locations: PropTypes.array.isRequired, // locations es requerida y debe ser un array
    title: PropTypes.string.isRequired, // title es requerida y debe ser una cadena de texto
    description: PropTypes.string.isRequired // description es requerida y debe ser una cadena de texto
  };

export default LocationList;


