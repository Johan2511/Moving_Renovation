import React, { useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Crea una instancia del mapa y asigna el ID del contenedor del mapa
      const map = L.map('mapid').setView([33.9256381, -84.1276978],25);

      // Añade una capa de mapa base (por ejemplo, OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Añade un marcador
      const marker = L.marker([33.9256381, -84.1276978], {
        icon: L.divIcon({
          className: 'custom-icon',
          html: ReactDOMServer.renderToString(<FaMapMarkerAlt color="red" size={32} />)
        })
      }).addTo(map)
        .bindPopup('Moving_Renovation')
        .openPopup();

        // Agrega un evento de clic al marcador para abrir Google Maps en una nueva pestaña
      marker.on('click', () => {
        window.open('https://www.google.com/maps?q=33.9256381,-84.1276978', '_blank');
      });

      mapRef.current = map;
    }
  }, []);

  return <div 
  id="mapid" 
  style={{ width: '800px', height: '400px', zIndex: 0 }} />;
};

export default Map;
