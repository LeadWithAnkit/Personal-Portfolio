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
    highlight: 'Admin Panel + Payment Gateway',
    color: '#4ade80',
  },
  {
  num: '02',
  title: 'QuickThumbnails',
  tagline: 'AI Thumbnail Generator',
  description: 'A web application that generates high-quality thumbnails instantly using AI. Users can input text or upload images to create engaging thumbnails. Implemented fast rendering, intuitive UI, and optimized performance for real-time preview.',
  tech: ['React.js', 'Node.js', 'Express.js', 'AI API', 'Tailwind CSS'],
  github: 'YOUR_GITHUB_LINK',
  live: 'https://quick-thumbnail1.vercel.app',
  highlight: 'AI + Performance',
  color: '#a78bfa',
  },
    {
    num: '03',
    title: 'MyMovies',
    tagline: 'Movie Listing App',
    description: 'A movie listing application where users can browse, search, and manage movies. Integrated Firebase for authentication and database. Used Redux for state management and built responsive UI with React.',
    tech: ['React.js', 'Redux', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/LeadWithAnkit/MyMovies',
    live: 'null',
    highlight: 'Firebase + State Management',
    color: '#91e5c6',
  },
  {
    num: '04',
    title: 'AutoMailer',
    tagline: 'Automated Bulk Email Sender',
    description: 'Tool that extracts email addresses from PDF, DOCX, and TXT files and sends bulk emails with resume attachments. Built with async processing, retry mechanism, and clean React UI.',
    tech: ['React', 'Node.js', 'Nodemailer', 'Multer', 'pdf-parse', 'mammoth'],
    github: 'https://github.com/LeadWithAnkit/AutoMailer',
    live: null,
    highlight: 'File Parsing + Bulk Email',
    color: '#60a5fa',
  },
  {
    num: '05',
    title: 'Personal Portfolio',
    tagline: 'Developer Portfolio Website',
    description: 'Modern responsive portfolio built with React, JavaScript, CSS. Features smooth animations, mobile-first design, and project showcase. Now rebuilt in React.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/LeadWithAnkit/Personal-Portfolio',
    live: 'https://iankittportfolio.netlify.app/',
    highlight: 'Responsive + Animated',
    color: '#f59e0b',
  },
  {
  num: '06',
  title: 'Jarvis Voice Assistant',
  tagline: 'AI Desktop Voice Assistant',
  description: 'Developed a Python-based voice assistant capable of executing system-level commands through speech recognition. Implemented features like opening applications, web browsing, playing music, sending emails, and real-time information retrieval using voice commands.',
  tech: ['Python', 'SpeechRecognition', 'pyttsx3', 'APIs', 'Automation'],
  github: 'https://github.com/LeadWithAnkit/Jarvis-Voice-Assistant',
  live: null,
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
        transform: visible ? 'none' : 'translateY(30px)',
        transition: `all 0.7s ease ${index * 0.1}s`,
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        border: `1px solid ${hovered ? project.color + '40' : 'var(--border)'}`,
        borderRadius: '16px', padding: '2rem',
        cursor: 'default',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s, background 0.3s, border-color 0.3s`,
        display: 'flex', flexDirection: 'column', gap: '1.2rem',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text3)' }}>{project.num}</span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          padding: '3px 10px', borderRadius: '4px',
          background: project.color + '15', color: project.color,
          border: `1px solid ${project.color}30`,
        }}>{project.highlight}</span>
      </div>

      {/* Title */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '4px' }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)', letterSpacing: '0.04em' }}>{project.tagline}</p>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.7, flex: 1 }}>{project.description}</p>

      {/* Tech */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            padding: '3px 8px', background: 'var(--surface)',
            border: '1px solid var(--border)', borderRadius: '3px',
            color: 'var(--text3)',
          }}>{t}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
        <a href={project.github} target="_blank" rel="noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text3)',
            display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
        >
          ⌥ GitHub
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text3)',
              display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = project.color}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{ padding: '8rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.12em' }}>03 / PROJECTS</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
          Things I've<br /><span style={{ color: 'var(--accent)' }}>Built.</span>
        </h2>
        <a href="https://github.com/LeadWithAnkit" target="_blank" rel="noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text3)',
            border: '1px solid var(--border)', padding: '8px 16px', borderRadius: '6px',
            transition: 'all 0.2s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text3)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
        >All Repos ↗</a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(1rem, 2vw, 1.5rem)' }} className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={p.num} project={p} index={i} visible={visible} />)}
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
            gap: 1.2rem !important;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
