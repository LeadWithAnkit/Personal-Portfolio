import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2rem',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(245, 241, 237, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.25rem',
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          AKT<span style={{ color: 'var(--accent)' }}>.</span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{
                background: 'none',
                border: 'none',
                color: active === l ? 'var(--accent)' : 'var(--text2)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '6px 0',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = active === l ? 'var(--accent)' : 'var(--text2)'}
            >
              {l}
            </button>
          ))}
          <a
            href="/Ankit_Resume1.pdf"
            download="Ankit_Kumar_Tiwari_Resume.pdf"
            style={{
              padding: '10px 24px',
              background: 'var(--accent)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 87, 34, 0.2)',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 87, 34, 0.3)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 87, 34, 0.2)';
            }}
          >
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
            cursor: 'pointer',
          }}>
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: menuOpen ? 'var(--accent)' : 'var(--text)',
            transition: 'all 0.4s ease',
            transform: menuOpen ? 'rotate(45deg) translate(8px, 8px)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: menuOpen ? 'var(--accent)' : 'var(--text)',
            transition: 'all 0.4s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: menuOpen ? 'var(--accent)' : 'var(--text)',
            transition: 'all 0.4s ease',
            transform: menuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: '70px',
        left: 0,
        right: 0,
        zIndex: 99,
        background: 'rgba(245, 241, 237, 0.98)',
        backdropFilter: 'blur(30px)',
        borderBottom: '1px solid var(--border)',
        padding: menuOpen ? '2rem' : '0 2rem',
        maxHeight: menuOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }} className="mobile-menu">
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text)',
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 700,
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text)'}
          >
            {l}
          </button>
        ))}
        <a
          href="/Ankit_Resume1.pdf"
          download="Ankit_Kumar_Tiwari_Resume.pdf"
          style={{
            padding: '12px 24px',
            background: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            textAlign: 'center',
            fontWeight: 600,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Download Resume
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
