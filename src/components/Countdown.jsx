import React, { useEffect, useState } from 'react';
import { FloatingCorner } from './FloatingCorner';
import { VeenaPlayerSketch, TheyyamDancerSketch } from './Sketches';
import { ScrollReveal } from './ScrollReveal';

export const Countdown = () => {
  // Target date: September 17, 2026, 09:00 AM (relative to our user date in 2026)
  const targetDate = new Date('2026-09-17T09:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = targetDate - new Date().getTime();
      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section 
      id="countdown" 
      className="section-wrapper bg-paper-light" 
      style={{ 
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      {/* Background sketch on left (Veena Player) */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '20px',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <img src="/14.png" alt="decorative left" style={{ width: '300px', opacity: 0.8, marginLeft: '70px' }} />
      </div>

      {/* Background sketch on right (Standing Theyyam) */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '20px',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <img src="/15.png" alt="decorative right" style={{ width: '300px', opacity: 0.8, marginRight: '70px' }} />
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2, padding: '0 20px', textAlign: 'center' }}>
        
        {/* Title */}
        <ScrollReveal>
          <div className="editorial-heading-block" style={{ textAlign: 'center', margin: '0 auto 40px auto' }}>
            <h2 className="editorial-title" style={{ fontSize: '2rem', letterSpacing: '0.12em' }}>The Journey Begins In</h2>
            <div className="ornamental-divider" style={{ margin: '15px 0' }}>
              <div className="ornamental-divider-motif">
                <span />
                <span className="accent" />
                <span />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Numbers Row */}
        <ScrollReveal delay={150}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '650px',
            margin: '0 auto 40px auto'
          }} className="countdown-flex-row">
            <style dangerouslySetInnerHTML={{__html: `
              .countdown-divider {
                width: 1px;
                height: 50px;
                background-color: var(--border-color-dark);
                opacity: 0.5;
              }
              @media (max-width: 480px) {
                .countdown-flex-row {
                  gap: 10px !important;
                }
                .countdown-divider {
                  height: 30px !important;
                }
              }
            `}} />
            
            {/* Days */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: '900', color: 'var(--text-deep)', lineHeight: '1' }}>
                {timeLeft.days}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', marginTop: '6px', fontWeight: '700', textTransform: 'uppercase' }}>
                Days
              </div>
            </div>

            <div className="countdown-divider" />

            {/* Hours */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: '900', color: 'var(--text-deep)', lineHeight: '1' }}>
                {timeLeft.hours}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', marginTop: '6px', fontWeight: '700', textTransform: 'uppercase' }}>
                Hours
              </div>
            </div>

            <div className="countdown-divider" />

            {/* Minutes */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: '900', color: 'var(--text-deep)', lineHeight: '1' }}>
                {timeLeft.minutes}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', marginTop: '6px', fontWeight: '700', textTransform: 'uppercase' }}>
                Minutes
              </div>
            </div>

            <div className="countdown-divider" />

            {/* Seconds */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: '900', color: 'var(--text-deep)', lineHeight: '1' }}>
                {timeLeft.seconds}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', marginTop: '6px', fontWeight: '700', textTransform: 'uppercase' }}>
                Seconds
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
};
export default Countdown;
