import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#countdown' },
    { label: 'Events', href: '#events' },
    { label: 'Leaderboard', href: '#leaderboard' },
    { label: 'Team', href: '#team' }
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    
    // If we are on the dedicated events page, change hash to navigate back to home
    if (window.location.hash === '#/events') {
      window.location.hash = href;
      return;
    }

    e.preventDefault();
    let targetSelector = href;
    if (href === '#home') targetSelector = '#home';
    else if (href === '#countdown') targetSelector = '#countdown';
    else if (href === '#events') targetSelector = '#events';
    else if (href === '#leaderboard') targetSelector = '#leaderboard';
    else if (href === '#team') targetSelector = '#team';

    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update hash without jumping page layout
      window.history.pushState(null, null, href);
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: isScrolled ? 'rgba(248, 244, 232, 0.1)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
      transition: 'all 0.4s var(--ease-editorial)',
      padding: isScrolled ? '12px 5%' : '20px 5%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative'
      }}>
        
        {/* Left Side: College Malayalam Subtitle Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: '320px',
            textAlign: 'left'
          }}
          className="interactive-element"
          data-cursor-text="HOME"
        >
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            fontWeight: '600',
            color: 'var(--text-deep)',
            lineHeight: '1.4',
            letterSpacing: '0.01em'
          }}>
            എൻ.എസ്.എസ് കോളേജ് ഓഫ് എഞ്ചിനീയറിംഗ്, പാലക്കാട്
          </span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: 'var(--accent-red)',
            fontWeight: '700',
            marginTop: '2px'
          }}>
            SEP 17–20, 2026 &bull; CULTURAL FEST
          </span>
        </a>

        {/* Right Side: Navigation & Social Link */}
        <nav style={{ display: 'none', gap: '30px', alignItems: 'center' }} className="desktop-nav">
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 900px) {
              .desktop-nav {
                display: flex !important;
              }
              .mobile-toggle-btn {
                display: none !important;
              }
            }
          `}} />
          
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-deep)',
                textDecoration: 'none',
                position: 'relative',
                padding: '4px 0'
              }}
              className="interactive-element nav-item-underline"
              data-cursor-text="GO TO"
            >
              <style dangerouslySetInnerHTML={{__html: `
                .nav-item-underline::after {
                  content: '';
                  position: absolute;
                  bottom: -2px;
                  left: 0;
                  width: 0;
                  height: 1.5px;
                  background-color: var(--accent-red);
                  transition: width 0.3s var(--ease-editorial);
                }
                .nav-item-underline:hover::after {
                  width: 100%;
                }
              `}} />
              {link.label}
            </a>
          ))}

          {/* Subtle editorial divider */}
          <div style={{
            width: '1px',
            height: '16px',
            backgroundColor: 'var(--border-color)',
            opacity: 0.6,
            marginLeft: '4px'
          }} />

          {/* Social Instagram link directly in header */}
          <a
            href="https://www.instagram.com/agam.nssce"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow AGAM on Instagram"
            style={{
              color: 'var(--text-deep)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-red)';
              e.currentTarget.style.borderColor = 'var(--accent-red)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-deep)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
            className="interactive-element"
            data-cursor-text="INSTAGRAM"
          >
            <InstagramIcon size={14} />
          </a>

        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-deep)',
            cursor: 'pointer',
            padding: '5px'
          }}
          className="mobile-toggle-btn interactive-element"
          data-cursor-text="MENU"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Full Screen Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--bg-primary)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                background: 'none',
                border: 'none',
                color: 'var(--text-deep)',
                cursor: 'pointer',
                zIndex: 10,
                padding: '10px'
              }}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            {/* Navigation Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: 'center',
              paddingTop: '90px',
              zIndex: 1
            }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-deep)',
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}

              {/* Ornamental divider motif */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '10px',
                marginBottom: '5px'
              }}>
                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--border-color)' }} />
                <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: 'var(--accent-gold)', transform: 'rotate(45deg)' }} />
                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--border-color)' }} />
              </div>

              {/* Instagram link in mobile menu */}
              <a
                href="https://www.instagram.com/agam.nssce"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-red)',
                  backgroundColor: 'rgba(158, 63, 50, 0.08)',
                  border: '1px solid var(--accent-red)',
                  padding: '10px 22px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 10px rgba(158, 63, 50, 0.1)'
                }}
              >
                <InstagramIcon size={15} />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Image in vacant space below */}
            <div style={{
              flex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: '25px',
              opacity: 0.85
            }}>
              <img 
                src="/menu.png" 
                alt="Decorative menu art" 
                style={{ 
                  width: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain',
                  objectPosition: 'bottom'
                }} 
              />
            </div>
          </div>
        )}
        
      </div>
    </header>
  );
};
export default Header;
