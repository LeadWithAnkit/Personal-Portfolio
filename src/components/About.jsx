import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.15 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { num: '10+', label: 'Projects Built' },
    { num: 'MERN', label: 'Stack Focus' },
    { num: 'B.Tech', label: 'CSE Student' },
    { num: '2026', label: 'Graduating' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}
    >
      {/* Label */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--accent)',
          letterSpacing: '0.12em'
        }}>
          01 / ABOUT
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* MAIN GRID */}
      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start'
        }}
      >
        {/* LEFT */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateX(-30px)',
          transition: 'all 0.8s ease'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            color: 'var(--text)',
          }}>
            Building things<br />
            <span style={{ color: 'var(--accent)' }}>that matter.</span>
          </h2>

          <p style={{
            color: 'var(--text2)',
            lineHeight: 1.8,
            marginBottom: '1.2rem',
            fontSize: '0.95rem'
          }}>
            I'm Ankit Kumar Tiwari — a B.Tech Computer Science student passionate about full-stack development. I build real-world MERN applications from idea to deployment.
          </p>

          <p style={{
            color: 'var(--text2)',
            lineHeight: 1.8,
            marginBottom: '2rem',
            fontSize: '0.95rem'
          }}>
            I focus on clean architecture, performance, and modern UI/UX while actively seeking internship and SDE opportunities.
          </p>

          {/* TAGS */}
          <div style={{
            display: 'flex',
            gap: '0.8rem',
            flexWrap: 'wrap'
          }}>
            {['React.js', 'Node.js', 'MongoDB', 'Express', 'Java', 'Git'].map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                padding: '5px 12px',
                border: '1px solid var(--border2)',
                borderRadius: '4px',
                color: 'var(--text3)',
                letterSpacing: '0.05em',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT - STATS GRID */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateX(30px)',
          transition: 'all 0.8s ease 0.2s'
        }}>
          <div
            className="stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)', // 🔥 2x2 grid
              gap: '1px',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'var(--border)'
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg2)',
                  padding: 'clamp(1.2rem, 4vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  aspectRatio: '1 / 1' // 🔥 perfect square
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  letterSpacing: '-0.03em'
                }}>
                  {s.num}
                </span>

                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text3)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <div style={{
            marginTop: '1.2rem',
            padding: '1.2rem',
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              color: 'var(--text)',
              fontSize: '0.9rem'
            }}>
              B.Tech — Computer Science
            </p>

            <p style={{
              color: 'var(--text3)',
              fontSize: '0.8rem',
              marginTop: '4px'
            }}>
              Engineering College
            </p>
          </div>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;