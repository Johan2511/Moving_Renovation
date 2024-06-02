import React, { useEffect } from 'react';
import { useRoutes, BrowserRouter, useLocation } from 'react-router-dom'
import './App.css'
import Layout from '../../components/Layout/Layout.jsx';
import Home from '../Home/index.jsx';
import Servicios from '../Services/index.jsx';
import Residential from '../Services/residential.jsx';
import Commercial from '../Services/commercial.jsx';
import Apartment from '../Services/apartment.jsx';
import FurnitureAssembly from '../Services/furnitureAssembly.jsx';
import AboutPage from '../Nosotros/index.jsx';
import Contact from '../Contact/index.jsx';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-service', element: <Servicios /> },
    { path: '/my-service/residential', element: <Residential /> },
    { path: '/my-service/commercial', element: <Commercial /> },
    { path: '/my-service/apartment', element: <Apartment /> },
    { path: '/my-service/furniture-assembly', element: <FurnitureAssembly /> },
    { path: '/AboutUs', element: <AboutPage /> },
    { path: '/ContactUS', element: <Contact /> }
  ])
  return routes
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const  App = () => {

  return (
      <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <AppRoutes />
      </Layout>
      </BrowserRouter>
  )
}

export default App
