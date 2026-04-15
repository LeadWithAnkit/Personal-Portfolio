import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2rem',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)', fontSize: '1rem' }}>AKT.</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text3)' }}>
            © {year} Ankit Kumar Tiwari
          </span>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {[
            { label: 'GitHub', url: 'https://github.com/LeadWithAnkit' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ankit-kumar-tiwari08/' },
            { label: 'Email', url: 'mailto:ankitkumartiwari8360@gmail.com' },
          ].map(l => (
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--text3)', letterSpacing: '0.06em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text3)'}
            >{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
