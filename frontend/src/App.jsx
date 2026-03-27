import React, { useState, useEffect } from 'react';
import './App.css';
import heroImg from './assets/hero.png';
import TopMusicPlayer from './components/TopMusicPlayer';
import SystemTerminal from './components/SystemTerminal';

import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaLinux,
  FaKey, FaUserSecret, FaBug, FaSearch, FaNetworkWired,
  FaFacebookF, FaGithub, FaInstagram, FaEnvelope
} from 'react-icons/fa';

const getSocialIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case 'facebook': return <FaFacebookF size={22} />;
    case 'github': return <FaGithub size={22} />;
    case 'instagram': return <FaInstagram size={22} />;
    default: return <FaSearch size={22} />;
  }
};
import { SiJavascript, SiTypescript, SiMysql } from 'react-icons/si';

const getIconForSkill = (skill) => {
  const s = skill.toLowerCase().trim();
  if (s.includes('python')) return <FaPython size={20} color="#306998" />;
  if (s.includes('java') && !s.includes('script')) return <FaJava size={20} color="#f89820" />;
  if (s.includes('javascript')) return <SiJavascript size={20} color="#f7df1e" />;
  if (s.includes('typescript')) return <SiTypescript size={20} color="#3178c6" />;
  if (s.includes('html')) return <FaHtml5 size={20} color="#e34f26" />;
  if (s.includes('css')) return <FaCss3Alt size={20} color="#1572b6" />;
  if (s.includes('node') || s.includes('nodejs')) return <FaNodeJs size={20} color="#339933" />;
  if (s.includes('sql')) return <SiMysql size={20} color="#4479a1" />;
  if (s.includes('php')) return <FaPhp size={20} color="#777bb4" />;

  if (s.includes('linux')) return <FaLinux size={20} color="#fcc624" />;
  if (s.includes('privelege') || s.includes('privilege')) return <FaKey size={20} color="#ff3333" />;
  if (s.includes('backdoor')) return <FaUserSecret size={20} color="#ff3333" />;
  if (s.includes('penetration')) return <FaNetworkWired size={20} color="#ff3333" />;
  if (s.includes('cve') || s.includes('researcher')) return <FaBug size={20} color="#ff3333" />;

  return <FaSearch size={20} color="#888" />;
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      } else {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    const handleDown = () => setIsDragging(true);
    const handleUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchstart', handleDown);
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);

      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchstart', handleDown);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(val => {
        setData(val);
        setTimeout(() => setLoading(false), 2500);
      })
      .catch(err => {
        setData({
          aboutMe: "I'm Kianzhen. System Architect. Weapon: React & Node.js. Neighborhood Full-Stack Coder.",
          quote: { text: "The wise man never says everything he think, but always think everything he says.", author: "Aristotle" },
          socials: [
            { platform: "Facebook", url: "https://www.facebook.com/zh3nnn" },
            { platform: "GitHub", url: "https://github.com/kianluppoy8-sys" },
            { platform: "Instagram", url: "https://www.instagram.com/zhenie.sleep/" }
          ],
          skills: [
            { name: "Web Weaving", category: "React & Typescript" },
            { name: "Backdoor Control", category: "Node.js & Express" },
            { name: "The Multiverse", category: "Full-Stack Development" }
          ],
          activity: [{ action: "Patrolling", date: "Present", result: "Stabilizing the multiverse." }],
          hobby: ["Graffiti (Coding)", "Photography"]
        });
        setTimeout(() => setLoading(false), 2500);
      });
  }, []);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-anim');
        } else {
          entry.target.classList.remove('show-anim');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.scroll-anim, .scroll-anim-left, .scroll-anim-right, .scroll-anim-zoom');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, [loading]);

  if (loading) {
    return (
      <div className="loading-screen-container">
        <div className="loading-character-wrapper">
          <div className="loading-char-base"></div>
          <div className="loading-char-fill-wrapper">
            <div className="loading-char-fill"></div>
          </div>
        </div>
        <h1 className="glitch-text" style={{ marginTop: '2rem', fontSize: '2rem', letterSpacing: '4px' }} data-text="LOADING PLEASE WAIT...">LOADING PLEASE WAIT...</h1>
      </div>
    );
  }

  return (
    <div className="portfolio">
      <div
        className={`custom-cursor ${isDragging ? 'dragging' : ''}`}
        style={{ left: mousePos.x, top: mousePos.y, zIndex: 999999 }}
      />
      <nav className="sub-nav fade-in-up">
        <div className="container nav-content">
          <ul className="nav-links">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#system">SYSTEM</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#repositories">REPOS</a></li>
            <li><a href="#teams">TEAMS</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-grid-split">
            <div className="hero-text-and-player">
              <div className="title-row fade-in-up">
                <h1 className="glitch-text" data-text="KIANZHEN">Kianzhen</h1>
                <div className="hero-player-inline">
                  <TopMusicPlayer />
                </div>
              </div>
              <p className="subtitle fade-in-up delay-1">
                System Architect | Chief Technology Officer <br />
                <a href="mailto:kianluppoy8@gmail.com" style={{ color: '#ff3c3c', textDecoration: 'none', fontSize: '1.4rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
                  <FaEnvelope /> kianluppoy8@gmail.com
                </a>
              </p>
              <div className="cta fade-in-up delay-2" style={{ marginTop: '2rem' }}>
                <a href="#about" className="btn-primary">EXPLORE MISSION</a>
              </div>
              {data.socials && (
                <div className="social-links fade-in-up delay-2">
                  {data.socials.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                      {getSocialIcon(link.platform)}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="hero-visual fade-in-up delay-3" style={{ position: 'relative' }}>
              <div className="web-animation-container">
                <svg viewBox="0 0 100 100" className="animated-web">
                  <g stroke="rgba(255, 60, 60, 0.25)" strokeWidth="0.5" fill="none">
                    <path d="M50 50 L0 0 M50 50 L50 0 M50 50 L100 0 M50 50 L100 50 M50 50 L100 100 M50 50 L50 100 M50 50 L0 100 M50 50 L0 50" />
                    <polygon points="50,15 75,25 85,50 75,75 50,85 25,75 15,50 25,25" />
                    <polygon points="50,-5 90,10 105,50 90,90 50,105 10,90 -5,50 10,10" />
                    <polygon points="50,30 65,35 70,50 65,65 50,70 35,65 30,50 35,35" />
                  </g>
                </svg>
              </div>
              <div className="image-frame-pure">
                <img src={heroImg} alt="Kianzhen" className="main-image-hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-clean">
        <div className="container">
          <h2 className="section-title scroll-anim-left">THE STORY</h2>
          <div className="about-content">
            <p className="large-p scroll-anim-right">{data.aboutMe}</p>
            {data.hobby && data.hobby.length > 0 && (
              <div className="hobbies-grid">
                {data.hobby.map((h, i) => (
                  <div key={i} className={`hobby-chip ${i % 2 === 0 ? 'scroll-anim-left' : 'scroll-anim-right'}`}>
                    {typeof h === 'object' ? h.result || h.action : h}
                  </div>
                ))}
              </div>
            )}
            {data.quote && (
              <blockquote className="hero-quote scroll-anim-zoom delay-1">
                "{data.quote.text}"
                <cite>— {data.quote.author}</cite>
              </blockquote>
            )}
          </div>
        </div>
      </section>

      <section id="system" className="section-clean" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <h2 className="section-title scroll-anim-right">SYSTEM STATUS</h2>
          <SystemTerminal />
        </div>
      </section>

      <section id="skills" className="section-clean">
        <div className="container">
          <h2 className="section-title scroll-anim-left">ARSENAL</h2>
          <div className="skills-grid">
            {data.skills.map((s, i) => (
              <div key={i} className={`skill-card-solid ${i % 2 === 0 ? 'scroll-anim-left' : 'scroll-anim-right'}`}>
                <h3>{s.name || "Specialty"}</h3>
                {s.category ? (
                  <div className="skill-badges">
                    {s.category.split(',').map((item, idx) => {
                      const trimmed = item.trim();
                      if (!trimmed) return null;
                      return (
                        <div key={idx} className="skill-badge-item">
                          {getIconForSkill(trimmed)}
                          <span>{trimmed}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="repositories" className="section-clean" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <h2 className="section-title scroll-anim-left">PUBLIC REPOSITORIES</h2>
          <div className="skills-grid">
            {[
              { name: 'Contactless Photobooth', url: 'https://github.com/kianluppoy8-sys/contactless-photobooth' },
              { name: 'Code Point Unlock', url: 'https://github.com/kianluppoy8-sys/code-point-unlock' },
              { name: 'Cyber Security Tools', url: 'https://github.com/kianluppoy8-sys/cyber-security-tools' },
              { name: 'Kianzhen', url: 'https://github.com/kianluppoy8-sys/Kianzhen' },
            ].map((repo, i) => (
              <a key={i} href={repo.url} target="_blank" rel="noopener noreferrer" className={`skill-card-solid ${i % 2 === 0 ? 'scroll-anim-left' : 'scroll-anim-right'}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ margin: 0, color: '#ff3c3c' }}>{repo.name}</h3>
                <div style={{ marginTop: '1rem', color: '#aaa', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif' }}>
                  <FaGithub size={20} color="#fff" /> <span>View on GitHub</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="teams" className="section-clean">
        <div className="container">
          <h2 className="section-title scroll-anim-right">AFFILIATIONS / TEAMS</h2>
          <div className="teams-grid">
            {data.teams && data.teams.map((t, i) => (
              <div key={i} className="team-card scroll-anim-zoom">
                <div className="team-image-placeholder">
                  {t.image ? (
                    <img src={t.image} alt={t.name} />
                  ) : (
                    <div className="placeholder-text"><span className="glitch-text" data-text="IMAGE PENDING">IMAGE PENDING</span></div>
                  )}
                </div>
                <div className="team-info">
                  <h3>{t.name}</h3>
                  <p>{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 KIANZHEN</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
