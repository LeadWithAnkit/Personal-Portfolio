import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    num: '01',
    title: 'TickIT',
    tagline: 'Event Ticket Booking Platform',
    description: 'Full-stack MERN application for booking event tickets. Features admin panel for creating/managing events, user authentication with JWT, cart system, and Razorpay payment integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Razorpay'],
    github: 'https://github.com/LeadWithAnkit/TickIT',
    live: 'https://tickit-1-3e3l.onrender.com',
    highlight: 'Admin Panel + Payment',
    color: '#4ade80',
  },
  {
    num: '02',
    title: 'QuickThumbnails',
    tagline: 'AI-Powered Thumbnail Generator',
    description: 'Web application generating high-quality thumbnails instantly using AI. Users can input text or upload images to create engaging thumbnails with real-time preview and optimized rendering.',
    tech: ['React.js', 'Node.js', 'Express.js', 'AI API', 'Tailwind CSS'],
    github: 'https://github.com/LeadWithAnkit',
    live: 'https://quick-thumbnail1.vercel.app',
    highlight: 'AI + Real-time Preview',
    color: '#a78bfa',
  },
  {
    num: '03',
    title: 'MyMovies',
    tagline: 'Movie Discovery & Management',
    description: 'Movie listing application where users browse, search, and manage movies. Integrated Firebase for authentication and database with Redux for state management and responsive UI.',
    tech: ['React.js', 'Redux', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/LeadWithAnkit/MyMovies',
    live: '#',
    highlight: 'Firebase + State Mgmt',
    color: '#91e5c6',
  },
  {
    num: '04',
    title: 'AutoMailer',
    tagline: 'Bulk Email Automation Tool',
    description: 'Extracts email addresses from PDF, DOCX, and TXT files, then sends bulk emails with resume attachments. Includes async processing, retry mechanism, and clean React UI.',
    tech: ['React', 'Node.js', 'Nodemailer', 'Multer', 'pdf-parse'],
    github: 'https://github.com/LeadWithAnkit/AutoMailer',
    live: '#',
    highlight: 'File Parsing + Automation',
    color: '#60a5fa',
  },
  {
    num: '05',
    title: 'Personal Portfolio',
    tagline: 'Modern Developer Website',
    description: 'Premium responsive portfolio built with React featuring smooth animations, mobile-first design, and comprehensive project showcase with dark theme aesthetics.',
    tech: ['React', 'JavaScript', 'CSS3', 'Vite'],
    github: 'https://github.com/LeadWithAnkit/Personal-Portfolio',
    live: 'https://iankittportfolio.netlify.app/',
    highlight: 'Responsive + Animated',
    color: '#f59e0b',
  },
  {
    num: '06',
    title: 'Jarvis Voice Assistant',
    tagline: 'AI Desktop Voice Automation',
    description: 'Python-based voice assistant executing system-level commands through speech recognition. Features include opening applications, web browsing, email, music playback, and real-time information retrieval.',
    tech: ['Python', 'Speech Recognition', 'pyttsx3', 'APIs'],
    github: 'https://github.com/LeadWithAnkit/Jarvis-Voice-Assistant',
    live: '#',
    highlight: 'AI + Voice Automation',
    color: '#22d3ee',
  }
];

const ProjectCard = ({ project, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(40px)',
        transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`,
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        border: `1px solid ${hovered ? project.color + '50' : 'var(--border)'}`,
        borderRadius: '16px',
        padding: '2rem',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        boxShadow: hovered ? `0 20px 40px rgba(${parseInt(project.color.slice(1,3), 16)}, ${parseInt(project.color.slice(3,5), 16)}, ${parseInt(project.color.slice(5,7), 16)}, 0.1)` : '0 0 0 rgba(0,0,0,0)',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      {/* Colored left border accent */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '4px',
        background: project.color,
        opacity: hovered ? 1 : 0.3,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Top row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingLeft: '8px'
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          fontWeight: 800,
          color: project.color + '30',
          lineHeight: 1,
        }}>
          {project.num}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          padding: '4px 12px',
          borderRadius: '6px',
          background: project.color + '15',
          color: project.color,
          border: `1px solid ${project.color}35`,
          letterSpacing: '0.05em',
          fontWeight: 600,
        }}>
          {project.highlight}
        </span>
      </div>

      {/* Title */}
      <div style={{ paddingLeft: '8px' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.6rem',
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          marginBottom: '6px',
          transition: 'color 0.3s ease',
          color: hovered ? project.color : 'var(--text)',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text3)',
          letterSpacing: '0.04em',
        }}>
          {project.tagline}
        </p>
      </div>

      {/* Description */}
      <p style={{
        color: 'var(--text2)',
        fontSize: '0.88rem',
        lineHeight: 1.7,
        flex: 1,
        paddingLeft: '8px',
      }}>
        {project.description}
      </p>

      {/* Tech Stack */}
      <div style={{
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap',
        paddingLeft: '8px',
      }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            padding: '4px 10px',
            background: 'var(--surface)',
            border: `1px solid ${project.color}25`,
            borderRadius: '4px',
            color: hovered ? project.color : 'var(--text3)',
            transition: 'all 0.3s ease',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{
        display: 'flex',
        gap: '1.2rem',
        paddingTop: '1rem',
        paddingLeft: '8px',
        borderTop: `1px solid var(--border)`,
      }}>
        <a href={project.github} target="_blank" rel="noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text3)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.3s ease',
            fontWeight: 600,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = project.color;
            e.currentTarget.style.transform = 'translateX(4px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text3)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          ⌥ GitHub
        </a>
        {project.live && project.live !== '#' && (
          <a href={project.live} target="_blank" rel="noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text3)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.3s ease',
              fontWeight: 600,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = project.color;
              e.currentTarget.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text3)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            ↗ Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{
      padding: '8rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Section Label */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--accent)',
          letterSpacing: '0.12em',
          fontWeight: 700,
        }}>
          03 / PROJECTS
        </span>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, var(--border), transparent)'
        }} />
      </div>

      {/* Section Title */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '3rem'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          lineHeight: 1.1,
        }}>
          Things I've<br />
          <span style={{
            background: 'linear-gradient(135deg, var(--accent2), var(--accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Built & Shipped.
          </span>
        </h2>
        <a href="https://github.com/LeadWithAnkit" target="_blank" rel="noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text3)',
            border: '1px solid var(--border)',
            padding: '10px 18px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--accent)';
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.background = 'rgba(232,213,163,0.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text3)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          All Projects ↗
        </a>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'clamp(1.2rem, 2vw, 1.8rem)',
      }} className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} visible={visible} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            gap: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
