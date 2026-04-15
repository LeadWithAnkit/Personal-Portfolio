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
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
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
        padding: '0 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: -1,
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        opacity: 0.3,
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
      }} />

      {/* Glow */}
      <div style={{
        position: 'fixed',
        top: '-20%',
        left: '30%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(196,169,107,0.08) 0%, transparent 70%)',
        zIndex: -1,
      }} />

      {/* MAIN GRID */}
      <div
        className="hero-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          alignItems: 'center',
          gap: '3rem',
          minHeight: '100vh',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(30px)',
          transition: 'all 0.9s ease'
        }}
      >

        {/* LEFT SIDE */}
        <div>

          {/* Status */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(74,222,128,0.08)',
            border: '1px solid rgba(74,222,128,0.2)',
            borderRadius: '100px',
            padding: '6px 14px',
            marginBottom: '2rem',
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: 'var(--green)',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--green)',
            }}>
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: '1rem',
          }}>
            Ankit<br />
            <span style={{ color: 'var(--accent)' }}>Kumar</span><br />
            Tiwari
          </h1>

          {/* Typewriter */}
          <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent2)' }}>{displayed}</span>
            <span style={{ color: 'var(--accent)' }}>|</span>
          </div>

          {/* Bio */}
          <p style={{
            maxWidth: '500px',
            color: 'var(--text2)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}>
           Software Engineer with expertise in MERN full-stack development, backend API design, and Data Structures & Algorithms. Experienced
           in building and deploying scalable web applications with a focus on performance, security, and clean, maintainable architecture.
           Passionate about problem-solving and building impactful tech solutions
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '14px 32px',
                background: 'var(--accent)',
                color: 'var(--bg)',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              View Projects
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'var(--text)',
                border: '1px solid var(--border2)',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Contact Me
            </button>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '260px',
            height: '320px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            <img
              src="/profile.jpg"
              alt="Ankit"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
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
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr !important;
          }

          .hero-image {
            margin-top: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-image div {
            width: 200px !important;
            height: 260px !important;
          }
        }
      `}</style>

    </section>
  );
};

export default Hero;