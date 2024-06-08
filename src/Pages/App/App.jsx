import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Layout from '../../components/Layout/Layout.jsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Importaciones dinámicas de los componentes de las rutas
const Home = lazy(() => import('../Home/index.jsx'));
const Servicios = lazy(() => import('../Services/index.jsx'));
const Residential = lazy(() => import('../Services/residential.jsx'));
const Commercial = lazy(() => import('../Services/commercial.jsx'));
const Apartment = lazy(() => import('../Services/apartment.jsx'));
const LongDistanceMoving = lazy(() => import('../Services/LongDistanceMoving.jsx'));
const FurnitureAssembly = lazy(() => import('../Services/furnitureAssembly.jsx'));
const ItemLoadingServices = lazy(() => import('../Services/ItemLoadingServices.jsx'));
const PackingUnpacking = lazy(() => import('../Services/PackingUnpacking'));
const AboutPage = lazy(() => import('../Nosotros/index.jsx'));
const Contact = lazy(() => import('../Contact/index.jsx'));

// Componente para hacer scroll al inicio de la página en cambio de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Skeleton personalizado para header, navbar y hero
const LoadingSkeleton = () => (
  <div className="container mx-auto p-6 space-y-8">
    {/* Skeleton para el Header */}
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <Skeleton height={40} width="30%" className="mb-4" />
      <Skeleton height={24} width="60%" />
    </div>

    {/* Skeleton para el Navbar */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-8">
      <Skeleton height={40} width="10%" />
      <Skeleton height={40} width="10%" />
      <Skeleton height={40} width="10%" />
      <Skeleton height={40} width="10%" />
    </div>

    {/* Skeleton para el Hero */}
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <Skeleton height={300} width="100%" className="mb-4 rounded-lg" />
      <Skeleton height={40} width="50%" className="mb-4" />
      <Skeleton height={24} width="80%" />
    </div>
  </div>
);

// Componente principal de la aplicación
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <React.Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-service" element={<Servicios />} />
            <Route path="/my-service/residential" element={<Residential />} />
            <Route path="/my-service/commercial" element={<Commercial />} />
            <Route path="/my-service/apartment" element={<Apartment />} />
            <Route path="/my-service/longDistanceMoving" element={<LongDistanceMoving />} />
            <Route path="/my-service/furniture-assembly" element={<FurnitureAssembly />} />
            <Route path="/my-service/ItemLoadingServices" element={<ItemLoadingServices />} />
            <Route path="/my-service/packingUnpacking" element={<PackingUnpacking />} />
            <Route path="/AboutUs" element={<AboutPage />} />
            <Route path="/ContactUS" element={<Contact />} />
            {/* Manejo de rutas no encontradas */}
            {/* <Route component={NotFound} /> */}
          </Routes>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;




