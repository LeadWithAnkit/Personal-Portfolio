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
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div
        className={`hero-container ${visible ? 'is-visible' : ''}`}
      >
        <div className="hero-left">
          <p className="hero-subheading">FULL STACK ENGINEER</p>

          <h1 className="hero-title">
            FULL STACK
            <br />
            <span>DEVELOPER</span>
           
            
          </h1>

          <div className="hero-typing">
            <span className="hero-typing-label">I am a </span>
            <span className="hero-typing-text">{displayed}</span>
            <span className="hero-cursor">|</span>
          </div>

          <p className="hero-description">
            Building scalable web applications with modern tech stacks.
            Specialized in MERN full-stack development, clean architecture,
            and performance-focused solutions.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              View My Work
            </button>

            <a
              href="/Ankit_Resume1.pdf"
              download="Ankit_Kumar_Tiwari_Resume.pdf"
              className="btn btn-outline"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <p className="stat-value">20+</p>
              <p className="stat-label">Projects Built</p>
            </div>
            <div className="stat-card">
              <p className="stat-value">MERN</p>
              <p className="stat-label">Tech Stack</p>
            </div>
            <div className="stat-card">
              <p className="stat-value">2026</p>
              <p className="stat-label">Graduating</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-wrap">
            <div className="profile-glow" />
            <div className="profile-card">
              <img
                src="/profile.jpg"
                alt="Ankit Kumar Tiwari"
                className="profile-image"
              />
            </div>

            <div className="floating-badge badge-top">
              <span>⚡ Available for Internship</span>
            </div>

            <div className="floating-badge badge-bottom">
              <span>AI Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          padding: 90px 2rem 4rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 80px 80px;
          background-attachment: fixed;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(255, 87, 34, 0.08), transparent 35%);
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.35fr 0.95fr;
          align-items: center;
          gap: 5rem;
          min-height: calc(100vh - 140px);
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hero-container.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-left {
          max-width: 700px;
        }

        .hero-subheading {
          font-family: var(--font-display);
          font-size: 0.95rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 2.5px;
          margin-bottom: 1.4rem;
          text-transform: uppercase;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5.5vw, 5.8rem);
          font-weight: 710;
          line-height: 0.92;
          letter-spacing: -0.04em;
          margin-bottom: 1.2rem;
          color: var(--text);
        }

        .hero-title span {
          color: var(--accent);
        }

        .hero-typing {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text2);
          margin-bottom: 1.8rem;
          min-height: 28px;
          flex-wrap: wrap;
        }

        .hero-typing-text {
          color: var(--accent);
        }

        .hero-cursor {
          animation: blink 1s infinite;
          color: var(--accent);
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-description {
          max-width: 620px;
          color: var(--text2);
          line-height: 1.8;
          margin-bottom: 2.4rem;
          font-size: 1.05rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 2.8rem;
        }

        .btn {
          min-height: 52px;
          padding: 0 1.6rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.98rem;
          letter-spacing: 0.2px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          white-space: nowrap;
        }

        .btn-primary {
          background: var(--accent);
          color: white;
          border: 1px solid var(--accent);
          box-shadow: 0 10px 25px rgba(255, 87, 34, 0.22);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(255, 87, 34, 0.28);
        }

        .btn-outline {
          background: white;
          color: var(--text);
          border: 1.5px solid var(--accent);
        }

        .btn-outline:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-2px);
        }

        .hero-stats {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        .stat-card {
          min-width: 140px;
          padding: 1.1rem 1.2rem;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .stat-value {
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          color: var(--text2);
          font-size: 0.95rem;
        }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-wrap {
          position: relative;
          width: min(380px, 100%);
          aspect-ratio: 3 / 4;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-glow {
          position: absolute;
          inset: 10%;
          background: radial-gradient(circle, rgba(255, 87, 34, 0.22), transparent 68%);
          filter: blur(18px);
          z-index: 0;
        }

        .profile-card {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 28px;
          overflow: hidden;
          border: 2px solid var(--border);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.12);
          background: #fff;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .floating-badge {
          position: absolute;
          z-index: 2;
          padding: 0.75rem 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text);
        }

        .badge-top {
          top: 10%;
          left: -8%;
        }

        .badge-bottom {
          bottom: 10%;
          right: -10%;
        }

        @media (max-width: 1200px) {
          .hero-container {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 3rem;
          }

          .badge-top {
            left: 0;
          }

          .badge-bottom {
            right: 0;
          }
        }

        @media (max-width: 992px) {
          .hero-section {
            padding: 88px 1.5rem 3rem;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 2.8rem;
            min-height: auto;
            text-align: center;
          }

          .hero-left {
            margin: 0 auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-typing {
            justify-content: center;
          }

          .hero-right {
            order: -1;
          }

          .profile-wrap {
            width: min(320px, 86vw);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 82px 1rem 2.5rem;
            background-size: 56px 56px;
          }

          .hero-subheading {
            font-size: 0.85rem;
            letter-spacing: 2px;
          }

          .hero-title {
            font-size: clamp(2.4rem, 12vw, 4rem);
            line-height: 1;
          }

          .hero-description {
            font-size: 1rem;
            line-height: 1.7;
          }

          .hero-buttons {
            width: 100%;
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .hero-stats {
            width: 100%;
            gap: 0.85rem;
          }

          .stat-card {
            flex: 1 1 100%;
            min-width: 0;
          }

          .badge-top {
            top: 6%;
            left: 2%;
          }

          .badge-bottom {
            bottom: 6%;
            right: 2%;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 76px 0.9rem 2rem;
          }

          .hero-title {
            font-size: clamp(2.15rem, 13vw, 3rem);
          }

          .hero-typing {
            font-size: 1rem;
          }

          .profile-wrap {
            width: min(270px, 84vw);
          }

          .floating-badge {
            font-size: 0.8rem;
            padding: 0.6rem 0.85rem;
          }

          .stat-value {
            font-size: 1.45rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;