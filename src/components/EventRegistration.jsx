import React, { useState } from 'react';
import { DancerSketch } from './Sketches';
import { ScrollReveal } from './ScrollReveal';
import { eventCategories } from '../data/festData';
import { X, Award, Calendar, MapPin, Receipt, ShieldAlert, ArrowRight } from 'lucide-react';

export const EventRegistration = ({ 
  selectedCategory: propSelectedCategory,
  onSelectCategory: propOnSelectCategory
}) => {
  const [localSelectedCategory, setLocalSelectedCategory] = useState(null);
  const selectedCategory = propSelectedCategory !== undefined ? propSelectedCategory : localSelectedCategory;
  const setSelectedCategory = propOnSelectCategory || setLocalSelectedCategory;



  return (
    <section 
      id="events" 
      className="section-wrapper bg-paper-dark" 
      style={{ 
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      {/* Dynamic Background Ink Sketch (Classical Dancer on the left) */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '-10px',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <img src="/13.png" alt="decorative left" style={{ width: '250px', opacity: 0.8, zIndex: 5 }} />
      </div>
      <div style={{
        position: 'absolute',
        bottom: '30px',
        right: '-10px',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <img src="/16.png" alt="decorative right" style={{ width: '250px', opacity: 0.8, zIndex: 5 }} />
      </div>

      <div style={{ maxWidth: '1250px', margin: '0 auto', position: 'relative', zIndex: 2, padding: '0 20px' }}>
        
        {/* Title Block */}
        <ScrollReveal>
          <div className="editorial-heading-block" style={{ textAlign: 'center', margin: '0 auto 60px auto' }}>
            <span className="editorial-tagline">Explore. Participate. Excel.</span>
            <h2 className="editorial-title" style={{ fontSize: '3rem', letterSpacing: '0.08em' }}>Events</h2>
            <div className="ornamental-divider" style={{ margin: '15px 0' }}>
              <div className="ornamental-divider-motif">
                <span />
                <span className="accent" />
                <span />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 6-Column Responsive Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px'
        }} className="events-grid-layout">
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 768px) {
              .events-grid-layout {
                grid-template-columns: repeat(3, 1fr) !important;
                gap: 24px !important;
              }
            }
            @media (min-width: 1100px) {
              .events-grid-layout {
                grid-template-columns: repeat(6, 1fr) !important;
                gap: 15px !important;
              }
            }
          `}} />

          {eventCategories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 60}>
              <div 
                className="interactive-element"
                data-cursor-text="EXPLORE"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '2px',
                  padding: '24px 15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px',
                  textAlign: 'center',
                  transition: 'var(--transition-smooth)',
                  boxShadow: 'var(--shadow-editorial)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  const icon = e.currentTarget.querySelector('.card-art');
                  if (icon) icon.style.transform = 'scale(1.05) rotate(2deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  const icon = e.currentTarget.querySelector('.card-art');
                  if (icon) icon.style.transform = 'none';
                }}
              >
                {/* Visual Category Illustration */}
                <div 
                  className="card-art" 
                  style={{ 
                    height: '100px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transition: 'transform 0.4s var(--ease-editorial)'
                  }}
                >
                  <img 
                    src={`/${category.image || (index + 1) + '.png'}`} 
                    alt={category.name} 
                    style={{ 
                      maxHeight: '90px', 
                      maxWidth: '90px',
                      objectFit: 'contain',
                      opacity: 0.8
                    }} 
                  />
                </div>

                {/* Card Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: '800',
                  color: 'var(--text-deep)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  lineHeight: '1.2'
                }}>
                  {category.name}
                </h3>

                {/* Card Description */}
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.4',
                  minHeight: '40px'
                }}>
                  {category.desc}
                </p>

                {/* Small central divider line */}
                <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--border-color)' }} />

                {/* Explore button */}
                <button 
                  onClick={() => setSelectedCategory(selectedCategory?.id === category.id ? null : category)}
                  style={{
                    background: 'none',
                    border: '1px solid var(--border-color-dark)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.65rem',
                    fontWeight: '700',
                    color: 'var(--text-deep)',
                    cursor: 'pointer',
                    padding: selectedCategory?.id === category.id ? '6px 10px' : '6px 16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    borderRadius: '2px',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-red)';
                    e.currentTarget.style.color = 'var(--bg-primary)';
                    e.currentTarget.style.borderColor = 'var(--accent-red)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-deep)';
                    e.currentTarget.style.borderColor = 'var(--border-color-dark)';
                  }}
                  className="interactive-element"
                  data-cursor-text={selectedCategory?.id === category.id ? "CANCEL" : "VIEW"}
                >
                  {selectedCategory?.id === category.id ? <X size={14} /> : 'Explore'}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Explore All Events CTA */}
        <ScrollReveal delay={400}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
            <button 
              onClick={() => {
                window.location.hash = '#/events';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                backgroundColor: 'var(--accent-red)',
                color: 'var(--bg-primary)',
                border: 'none',
                padding: '16px 40px',
                fontWeight: '700',
                borderRadius: '4px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(158, 63, 50, 0.2)',
                transition: 'var(--transition-smooth)'
              }}
              className="interactive-element"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-deep)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-red)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Explore All Events &rarr;
            </button>
          </div>
        </ScrollReveal>

      </div>

      {/* Slide-over Drawer for Event List Details (Fallback if not handled at App root) */}
      {!propOnSelectCategory && selectedCategory && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '600px',
          height: '100%',
          backgroundColor: 'var(--bg-primary)',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          animation: 'slideInRight 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          overflow: 'hidden'
        }}>
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes slideInRight {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
              }
            `}} />
            
            {/* Drawer Header */}
            <div style={{
              padding: '24px 30px',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--bg-secondary)'
            }}>
              <div>
                <span style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '0.7rem', 
                  color: 'var(--accent-red)', 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase'
                }}>
                  Category Events
                </span>
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.4rem', 
                  textTransform: 'uppercase',
                  color: 'var(--text-deep)'
                }}>
                  {selectedCategory.name}
                </h3>
              </div>
              
              <button 
                onClick={() => setSelectedCategory(null)}
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-deep)'
                }}
                className="interactive-element"
                data-cursor-text="CLOSE"
              >
                <X size={16} />
              </button>
            </div>

            {/* Drawer Content */}
            <div style={{
              flex: '1',
              overflowY: 'auto',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}>
              {selectedCategory.events.map((event) => (
                <div key={event.id} style={{
                  paddingBottom: '24px',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <h4 style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '1.1rem', 
                    color: 'var(--text-deep)', 
                    textTransform: 'uppercase' 
                  }}>
                    {event.title}
                  </h4>
                  
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {event.desc}
                  </p>

                  {/* Metadata Row */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                    margin: '5px 0'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-deep)' }}>
                      <Award size={13} style={{ color: 'var(--accent-gold)' }} />
                      <strong>Prize:</strong> {event.prize}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-deep)' }}>
                      <Receipt size={13} style={{ color: 'var(--accent-gold)' }} />
                      <strong>Fee:</strong> {event.fee}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-deep)' }}>
                      <Calendar size={13} style={{ color: 'var(--accent-gold)' }} />
                      {event.time}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-deep)' }}>
                      <MapPin size={13} style={{ color: 'var(--accent-gold)' }} />
                      {event.venue}
                    </div>
                  </div>

                  {/* Rules */}
                  <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '15px',
                    borderRadius: '2px',
                    borderLeft: '2px solid var(--accent-red)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent-red)' }}>
                      <ShieldAlert size={13} /> Rules
                    </div>
                    <ul style={{ paddingLeft: '15px', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {event.rules.map((rule, rIdx) => (
                        <li key={rIdx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
      )}
    </section>
  );
};
export default EventRegistration;
