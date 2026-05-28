import React, { useEffect, useState } from 'react';

const roles = ['Full Stack Developer', 'Aspiring SDE', 'MERN Stack Dev', 'Problem Solver'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        padding: '80px 2rem 0',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        background: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        backgroundAttachment: 'fixed',
      }}
    >   
      <div
        className="hero-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 0.8fr',
          alignItems: 'center',
          gap: '6rem',
          minHeight: '90vh',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(40px)',
          transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {/* LEFT SIDE */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s'
        }}>
          {/* Subheading */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            color: 'var(--accent)',
            fontWeight: 600,
            letterSpacing: '2px',
            marginBottom: '2rem',
            textTransform: 'uppercase',
          }}>
            FULL STACK ENGINEER
          </p>

          {/* Main Heading */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              wordSpacing: '0.1em',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            marginBottom: '2rem',
            color: 'var(--text)',
          }}>
            FULL STACK<br />
            <span style={{ color: 'var(--accent)' }}>DEVELOPER</span><br />
            & MERN
          </h1>

          {/* Bio */}
          <p style={{
            maxWidth: '600px',
            color: 'var(--text2)',
            lineHeight: 1.8,
            marginBottom: '3rem',
            fontSize: '1.05rem',
            letterSpacing: '0.3px'
          }}>
            Building scalable web applications with modern tech stack. Specialized in MERN full-stack development, clean architecture, and performance optimization. Passionate about creating impactful digital solutions.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: '3rem'
          }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '16px 40px',
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 20px rgba(255, 87, 34, 0.2)',
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 30px rgba(255, 87, 34, 0.3)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(255, 87, 34, 0.2)';
              }}
            >
              View My Work
            </button>

            <a
              href="/Ankit_Resume1.pdf"
              download="Ankit_Kumar_Tiwari_Resume.pdf"
              style={{
                padding: '16px 40px',
                background: 'white',
                color: 'var(--text)',
                border: '2px solid var(--accent)',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.target.style.background = 'var(--accent)';
                e.target.style.color = 'white';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'white';
                e.target.style.color = 'var(--text)';
              }}
            >
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            borderTop: '1px solid var(--border)',
            paddingTop: '2rem',
          }}>
            <div>
              <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>10+</p>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>Projects Built</p>
            </div>
            <div>
              <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>MERN</p>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>Tech Stack</p>
            </div>
            <div>
              <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>2026</p>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>Graduating</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PROFILE */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateX(40px)',
          transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s'
        }}>
          <div style={{
            width: '320px',
            height: '420px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '2px solid var(--border)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            position: 'relative',
          }}>
            <img
              src="/profile.jpg"
              alt="Ankit Kumar Tiwari"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            minHeight: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;