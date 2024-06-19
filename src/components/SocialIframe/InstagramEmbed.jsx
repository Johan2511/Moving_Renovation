import React from 'react';
import './InstagramEmbed.css'; // Importa el archivo CSS si necesitas estilos personalizados

const InstagramEmbed = ({ urls }) => {
  return (
    <div className="instagram-embed-container">
      <div className="instagram-embed-scroll-container">
        {urls.map((url, index) => (
          <div key={index} className="instagram-embed-item">
            <iframe
              src={`https://www.instagram.com/p/${url}/embed`}
              width="400"
              height="550"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media; picture-in-picture; web-share; autoplay"
              allowFullScreen
              title={`Instagram Embed ${index}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramEmbed;


