import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(''); 

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/xwvavbwq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contacts = [
    { label: 'Email', value: 'ankitkumartiwari8360@gmail.com', href: 'mailto:ankitkumartiwari8360@gmail.com', icon: '✉' },
    { label: 'LinkedIn', value: '/in/ankit-kumar-tiwari08', href: 'https://www.linkedin.com/in/ankit-kumar-tiwari08/', icon: '↗' },
    { label: 'GitHub', value: 'LeadWithAnkit', href: 'https://github.com/LeadWithAnkit', icon: '⌥' },
    { label: 'Phone', value: '+91 87097 25171', href: 'tel:+918709725171', icon: '◎' },
  ];

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: 'var(--bg)', border: '1px solid var(--border)',
    borderRadius: '8px', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" ref={ref} style={{ padding: '8rem 2rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.12em' }}>04 / CONTACT</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-20px)', transition: 'all 0.7s ease' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              Let's work<br /><span style={{ color: 'var(--accent)' }}>together.</span>
            </h2>

            <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '3rem' }}>
              I'm currently open to internship roles and full-time SDE positions. If you have an opportunity or just want to talk tech — my inbox is always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contacts.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1rem 1.2rem', background: 'var(--bg3)',
                    border: '1px solid var(--border)', borderRadius: '10px',
                    transition: 'all 0.2s', color: 'var(--text)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--surface)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg3)'; }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent)', width: '20px' }}>{c.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.label}</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text2)', marginTop: '2px' }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(20px)', transition: 'all 0.7s ease 0.2s' }}>
            <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '16px', padding: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text)' }}>
                Send me a message
              </h3>

              {status === 'sent' ? (
                <div style={{
                  textAlign: 'center', padding: '3rem',
                  background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.2)',
                  borderRadius: '10px',
                }}>
                  <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--green)', marginBottom: '0.5rem' }}>Message Sent!</p>
                  <p style={{ color: 'var(--text3)', fontSize: '0.85rem' }}>I'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('')} style={{ marginTop: '1.5rem', background: 'none', border: '1px solid var(--border)', color: 'var(--text3)', padding: '8px 20px', borderRadius: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', cursor: 'pointer' }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                    <div>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>NAME *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Ankit Tiwari" required
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>EMAIL *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>SUBJECT</label>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="Internship Opportunity / Collaboration"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>MESSAGE *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Hi Ankit, I'd like to talk about..." required rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--red)', background: 'rgba(248,113,113,0.08)', padding: '10px 14px', borderRadius: '6px' }}>
                      !Something went wrong. Please email me directly at ankitiwari008@gmail.com
                    </p>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    style={{
                      padding: '14px', background: status === 'sending' ? 'var(--accent3)' : 'var(--accent)',
                      color: 'var(--bg)', border: 'none', borderRadius: '8px',
                      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem',
                      letterSpacing: '-0.01em', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { if (status !== 'sending') e.target.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => e.target.style.transform = 'none'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>

                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', textAlign: 'center', marginTop: '0.5rem' }}>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
