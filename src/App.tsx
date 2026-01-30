import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for performance
// const Home = React.lazy(() => import('./pages/Home'));
const Maintenance = React.lazy(() => import('./pages/Maintenance'));
// const About = React.lazy(() => import('./pages/About'));
// const Courses = React.lazy(() => import('./pages/Courses'));
// const Contact = React.lazy(() => import('./pages/Contact'));
// const Enrollment = React.lazy(() => import('./pages/Enrollment'));
// const DevPage = React.lazy(() => import('./pages/DevPage'));

// Scroll restoration helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm font-medium animate-pulse">Carregando...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow pt-20">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Maintenance Mode - All routes redirect to Maintenance */}
              <Route path="*" element={<Maintenance />} />

              {/* 
              <Route path="/" element={<Maintenance />} />
              <Route path="/sobrenos" element={<About />} />
              <Route path="/cursos/:category" element={<Courses />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/matricula" element={<Enrollment />} />
              <Route path="/dev" element={<DevPage />} />
              */}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
