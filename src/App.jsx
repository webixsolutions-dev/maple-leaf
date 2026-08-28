import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomecareFooterBar from './components/services/HomecareFooterBar';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/common/ScrillOnTop';

const HOMECARE_ROUTES = [
  '/our-services',
  '/our-services/child-care',
  '/our-services/senior-personal-care',
  '/our-services/home-cleaning',
];

function App() {
  const location = useLocation();
  const isHomecarePage = HOMECARE_ROUTES.includes(location.pathname);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isLoading && (
        <>
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          {isHomecarePage ? <HomecareFooterBar /> : <Footer />}
        </>
      )}
    </div>
  );
}

export default App;