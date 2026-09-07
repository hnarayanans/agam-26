import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { EventRegistration } from './components/EventRegistration';
import { Leaderboard } from './components/Leaderboard';
import { OrganizingTeam } from './components/OrganizingTeam';
import { Footer } from './components/Footer';
import { AllEventsPage } from './components/AllEventsPage';
import { Preloader } from './components/Preloader';
import { MarqueeDivider } from './components/MarqueeDivider';
import { Schedule } from './components/Schedule';
import { CategoryEventsDrawer } from './components/CategoryEventsDrawer';

function App() {
  const [selectedCategoryDrawer, setSelectedCategoryDrawer] = useState(null);
  const [currentPage, setCurrentPage] = useState(window.location.hash === '#/events' ? 'events' : 'home');
  const [loading, setLoading] = useState(true);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    // Close category drawer on page change
    setSelectedCategoryDrawer(null);
  }, [currentPage]);

  useEffect(() => {
    // End the loading state (hides progress bar etc.)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Wait 1250ms for the clip-path circle wipe to complete
      const hideTimer = setTimeout(() => setPreloaderVisible(false), 1250);
      return () => clearTimeout(hideTimer);
    }
  }, [loading]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/events') {
        setCurrentPage('events');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentPage === 'home' && window.location.hash && window.location.hash !== '#/events') {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [currentPage]);

  return (
    <div className="app-container">
      {/* Preloader overlaid on top — content renders underneath immediately */}
      {preloaderVisible && <Preloader loading={loading} />}

      {/* Subtle organic paper texture overlay */}
      <div className="paper-texture" />

      {/* Navigation Header */}
      <Header />

      {currentPage === 'home' ? (
        <>
          <main style={{ position: 'relative', zIndex: 2, backgroundColor: 'var(--bg-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            {/* Hero entry section with Theyyam image & parallax */}
            <div style={{ position: 'sticky', top: 0, zIndex: 1, height: '100vh' }}>
              <Hero />
            </div>

            {/* Rest of the site scrolls over the Hero */}
            <div style={{ position: 'relative', zIndex: 2, backgroundColor: 'var(--bg-primary)' }}>
              {/* Countdown to fest start */}
              <Countdown />

            {/* Expandable Department standings */}
            <Leaderboard />

            {/* Infinite Marquee Divider */}
            <MarqueeDivider />

            {/* Event Schedule */}
            <Schedule />

            {/* Categories and Event registration details */}
            <EventRegistration 
              selectedCategory={selectedCategoryDrawer}
              onSelectCategory={setSelectedCategoryDrawer}
            />

            {/* Infinite Marquee Divider */}
            <MarqueeDivider />

            {/* Organizing committee grid with custom vector avatars */}
            <OrganizingTeam />
            </div>
          </main>
        </>
      ) : (
        <main style={{ position: 'relative', zIndex: 2, backgroundColor: 'var(--bg-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <AllEventsPage />
        </main>
      )}

      {/* Footer closing page */}
      <Footer />

      {/* Category Events Slide-over Drawer (Rendered at root to stay above fixed Header) */}
      <CategoryEventsDrawer
        category={selectedCategoryDrawer}
        onClose={() => setSelectedCategoryDrawer(null)}
      />
    </div>
  );
}

export default App;
