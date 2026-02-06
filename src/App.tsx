import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const Maintenance = React.lazy(() => import('./pages/Maintenance'));
const CourseDetails = React.lazy(() => import('./pages/CourseDetails'));
const About = React.lazy(() => import('./pages/About'));
const Courses = React.lazy(() => import('./pages/Courses'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Enrollment = React.lazy(() => import('./pages/Enrollment'));
const Blog = React.lazy(() => import('./pages/Blog'));
const DevPage = React.lazy(() => import('./pages/DevPage'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 text-center">
          <div className="max-w-md">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h1 className="text-2xl font-black text-gray-900 mb-4">Ops! Algo deu errado.</h1>
            <p className="text-gray-600 mb-8">Desculpe pelo transtorno. Estamos trabalhando para resolver isso.</p>
            <button
              onClick={() => window.location.href = '/'}
              className="btn-primary w-full"
            >
              Voltar para o Início
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


// Scroll restoration helper
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);
  return null;
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 border-4 border-primary/10 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="fas fa-graduation-cap text-primary text-3xl animate-pulse"></i>
        </div>
      </div>
      <h2 className="text-xl font-black text-gray-900 tracking-tight">ITEC ENSINO</h2>
      <div className="flex gap-1 mt-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* Maintenance Route - kept for manual access if needed, or fallback */}
                <Route path="/maintenance" element={<Maintenance />} />

                {/* Standard Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/sobrenos" element={<About />} />
                <Route path="/cursos" element={<Courses />} />
                <Route path="/cursos/:category" element={<Courses />} />
                <Route path="/curso/:slug" element={<CourseDetails />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/matricula" element={<Enrollment />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacidade" element={<Privacy />} />
                <Route path="/termos" element={<Terms />} />
                <Route path="/dev" element={<DevPage />} />

                {/* Redirect unknown routes to Home or 404/Maintenance */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
