import React, { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', level: 85, note: 'Experienced' },
      { name: 'JavaScript', level: 78, note: 'Proficient' },
      { name: 'C++', level: 65, note: 'Intermediate' },
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 80, note: 'Proficient' },
      { name: 'HTML / CSS', level: 90, note: 'Experienced' },
      { name: 'Tailwind CSS', level: 70, note: 'Intermediate' },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 72, note: 'Intermediate' },
      { name: 'Express.js', level: 75, note: 'Intermediate' },
      { name: 'MongoDB', level: 80, note: 'Intermediate' },
      { name: 'Firebase', level: 80, note: 'Intermediate' },
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 80, note: 'Proficient' },
      { name: 'Postman', level: 75, note: 'Intermediate' },
      { name: 'Render / Vite', level: 79, note: 'Intermediate' },
      { name: 'Redis', level: 65, note: 'Basic' },
    ]
  },
];

const SkillBar = ({ name, level, note, visible }) => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { if (visible) setTimeout(() => setAnimated(true), 200); }, [visible]);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 500, letterSpacing: '0.3px' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em' }}>{note}</span>
      </div>
      <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, var(--accent3), var(--accent))',
          width: animated ? `${level}%` : '0%',
          transition: 'width 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }} />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ padding: '8rem 2rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700 }}>02 / SKILLS</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem' }} className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={gi} style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(30px)',
              transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${gi * 0.1}s`,
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', background: `linear-gradient(90deg, var(--accent), var(--accent3))` }} />
                {group.category}
              </h3>
              {group.skills.map(s => <SkillBar key={s.name} {...s} visible={visible} />)}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: '1.5rem', fontWeight: 600 }}>ALSO FAMILIAR WITH</p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {['Express.js', 'React', 'REST APIs', 'JWT Auth','AWS', 'Multer', 'Nodemailer', 'Razorpay', 'QR Code', 'bcrypt', 'Mongoose', 'Axios', 'Vite'].map(t => (
              <span key={t} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                padding: '6px 14px',
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                color: 'var(--text3)',
                letterSpacing: '0.04em',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.color = 'var(--accent)';
                e.target.style.background = 'rgba(232,213,163,0.05)';
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.color = 'var(--text3)';
                e.target.style.background = 'var(--bg3)';
              }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
