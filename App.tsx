import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Technical from './components/Technical';

function App() {
  // Initialize with current hash or default to #home
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => {
      // Default to #home if hash is empty
      setCurrentPath(window.location.hash || '#home');
    };
    
    // Ensure we capture the initial state correctly
    onHashChange();

    window.addEventListener('hashchange', onHashChange);
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const isLegalPage = ['#privacy', '#terms', '#technical'].includes(currentPath);

  // Handle scrolling when switching views or hashes
  useEffect(() => {
    // 1. If we are on a legal page, always scroll to top
    if (isLegalPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 2. If we are explicitly on home, scroll to top
    if (currentPath === '#home') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }

    // 3. Handling navigation to Landing Page sections (e.g. #contact, #service-1)
    if (!isLegalPage && currentPath) {
      const element = document.querySelector(currentPath);
      
      if (element) {
        // Element exists (same page navigation), scroll to it
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Element doesn't exist yet (coming from legal page), wait for render
        setTimeout(() => {
          const deferredElement = document.querySelector(currentPath);
          if (deferredElement) {
            deferredElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [currentPath, isLegalPage]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header forceOpaque={isLegalPage} />
      
      <main className="flex-grow">
        {currentPath === '#privacy' && <PrivacyPolicy />}
        {currentPath === '#terms' && <TermsOfUse />}
        {currentPath === '#technical' && <Technical />}
        
        {!isLegalPage && (
          <>
            <Hero />
            <About />
            <Services />
            <Process />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;