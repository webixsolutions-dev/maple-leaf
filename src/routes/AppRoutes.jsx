import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy Loading - Pages
const Home = lazy(() => import("../components/pages/Home.jsx"));
const AboutUs = lazy(() => import("../components/pages/About.jsx"));
const Programs = lazy(() => import("../components/pages/Programs.jsx"));
const Admissions = lazy(() => import("../components/pages/Admission.jsx"));
const BookTour = lazy(() => import("../components/pages/BookTour.jsx"));
const ContactUs = lazy(() => import("../components/pages/ContactUs.jsx"));
const Fees = lazy(() => import("../components/pages/Fees.jsx"));
const OurServices = lazy(() => import("../components/pages/OurServices.jsx"));
const ChildCareServices = lazy(() => import("../components/pages/services/ChildCareServices.jsx"));
const SeniorPersonalCare = lazy(() => import("../components/pages/services/SeniorPersonalCare.jsx"));
const HomeCleaningServices = lazy(() => import("../components/pages/services/HomeCleaningServices.jsx"));

// import sub components of program
import InfantProgram from '../components/pages/programs/InfantProgram.jsx';
import ToddlerProgram from '../components/pages/programs/ToddlerProgram.jsx';
import PreschoolProgram from '../components/pages/programs/PreschoolProgram.jsx';
import AfterSchoolProgram from '../components/pages/programs/AfterSchoolProgram.jsx';
import SummerProgram from '../components/pages/programs/SummerProgram.jsx';

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Route Transition Animation
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// Animated Route Wrapper
const AnimatedRoute = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="enter"
    exit="exit"
    className="w-full"
  >
    {children}
  </motion.div>
);

// Main Routes Component
const AppRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <Home />
              </AnimatedRoute>
            </Suspense>
          } 
        />
        
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <AboutUs />
              </AnimatedRoute>
            </Suspense>
          } 
        />
        
        <Route 
          path="/programs" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <Programs />
              </AnimatedRoute>
            </Suspense>
          } 
        />
        
        <Route 
          path="/admissions" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <Admissions />
              </AnimatedRoute>
            </Suspense>
          } 
        />
        
        <Route 
          path="/book-tour" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <BookTour />
              </AnimatedRoute>
            </Suspense>
          } 
        />
        
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <ContactUs />
              </AnimatedRoute>
            </Suspense>
          } 
        />
        
        <Route 
          path="/fees" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <Fees />
              </AnimatedRoute>
            </Suspense>
          } 
        />

        <Route 
          path="/our-services" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <OurServices />
              </AnimatedRoute>
            </Suspense>
          } 
        />

        <Route 
          path="/our-services/child-care" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <ChildCareServices />
              </AnimatedRoute>
            </Suspense>
          } 
        />

        <Route 
          path="/our-services/senior-personal-care" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <SeniorPersonalCare />
              </AnimatedRoute>
            </Suspense>
          } 
        />

        <Route 
          path="/our-services/home-cleaning" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <HomeCleaningServices />
              </AnimatedRoute>
            </Suspense>
          } 
        />

        {/* Program Sub-routes redirect to main coming soon programs page */}
        <Route path="/programs/infant" element={<Navigate to="/programs" replace />} />
        <Route path="/programs/toddler" element={<Navigate to="/programs" replace />} />
        <Route path="/programs/preschool" element={<Navigate to="/programs" replace />} />
        <Route path="/programs/after-school" element={<Navigate to="/programs" replace />} />
        <Route path="/programs/summer" element={<Navigate to="/programs" replace />} />

        {/* Admissions Sub-routes */}
        <Route 
          path="/admissions/subsidy" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <Programs />
              </AnimatedRoute>
            </Suspense>
          } 
        />
        
        <Route 
          path="/admissions/registration" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoute>
                <Admissions />
              </AnimatedRoute>
            </Suspense>
          } 
        />

     
        {/* Redirect any unknown routes to 404 */}
        <Route 
          path="*" 
          element={<Navigate to="/404" replace />} 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;