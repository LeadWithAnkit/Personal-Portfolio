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
    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ankit_Resume.pdf";
    link.download = "Ankit_Kumar_Tiwari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2rem',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        {/* Logo */}
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'var(--accent)' }}>
          AKT<span style={{ color: 'var(--text3)' }}>.</span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{
                background: 'none', border: 'none', color: active === l ? 'var(--accent)' : 'var(--text2)',
                fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.08em',
                textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.2s',
                padding: '4px 0',
                borderBottom: active === l ? '1px solid var(--accent)' : '1px solid transparent',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = active === l ? 'var(--accent)' : 'var(--text2)'}
            >{l}</button>
          ))}
          <a 
            href="/Ankit_Resume.pdf" 
            download="Ankit_Kumar_Tiwari_Resume.pdf"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.05em',
              padding: '8px 18px', border: '1px solid var(--accent2)',
              color: 'var(--accent)', borderRadius: '4px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--bg)'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
          >
            Resume ↓
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn"
          style={{ background: 'none', border: 'none', color: 'var(--text)', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}>
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: menuOpen ? 'var(--accent)' : 'var(--text)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: menuOpen ? 'var(--accent)' : 'var(--text)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: menuOpen ? 'var(--accent)' : 'var(--text)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
        background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: menuOpen ? '2rem' : '0 2rem',
        maxHeight: menuOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        display: 'flex', flexDirection: 'column', gap: '1.5rem',
      }} className="mobile-menu">
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)}
            style={{
              background: 'none', border: 'none', color: 'var(--text2)',
              fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700,
              textAlign: 'left', cursor: 'pointer',
            }}>{l}</button>
        ))}
        <button onClick={handleDownload}>
          Download Resume ↓
        </button>
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
