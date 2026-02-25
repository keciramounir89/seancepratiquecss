import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SchoolNavbar from '../components/SchoolNavbar';
import './SchoolHome.css';

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function ProgramCard({ icon, title, desc, t }) {
  return (
    <div className="program-card card">
      <span className="program-icon">{icon}</span>
      <h3 className="program-title">{title}</h3>
      <p className="program-desc">{desc}</p>
      <button className="btn btn-outline btn-sm">{t('programs.learnMore')}</button>
    </div>
  );
}

function StepCard({ num, title, desc }) {
  return (
    <div className="step-card">
      <div className="step-num">{num}</div>
      <h4 className="step-title">{title}</h4>
      <p className="step-desc">{desc}</p>
    </div>
  );
}

export default function SchoolHome() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [contactSent, setContactSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContact = (e) => {
    e.preventDefault();
    setContactSent(true);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setContactSent(false), 4000);
  };

  return (
    <div className="school-home">
      <SchoolNavbar />

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-badge">🎓 Al-Nour Academy · Algiers</div>
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <p className="hero-desc">{t('hero.description')}</p>
          <div className="hero-actions">
            <button className="btn btn-hero-primary" onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}>
              {t('hero.cta')}
            </button>
            <button className="btn btn-hero-outline" onClick={() => document.getElementById('admissions').scrollIntoView({ behavior: 'smooth' })}>
              {t('hero.apply')}
            </button>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>↓</span>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats-grid">
          <StatCard value="1,200+" label={t('about.stats.students')} />
          <StatCard value="85+" label={t('about.stats.teachers')} />
          <StatCard value="35" label={t('about.stats.years')} />
          <StatCard value="18" label={t('about.stats.programs')} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
          <div className="about-grid">
            <div className="about-image-placeholder">
              <div className="about-img-inner">
                <span style={{ fontSize: '4rem' }}>🏫</span>
                <p style={{ color: 'white', fontWeight: 600, marginTop: '1rem' }}>Al-Nour Academy</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Est. 1990 · Algiers, Algeria</p>
              </div>
            </div>
            <div className="about-content">
              <div className="about-block">
                <h3>🎯 {t('about.mission')}</h3>
                <p>{t('about.missionText')}</p>
              </div>
              <div className="about-block">
                <h3>🔭 {t('about.vision')}</h3>
                <p>{t('about.visionText')}</p>
              </div>
              <div className="about-block">
                <h3>💎 {t('about.values')}</h3>
                <p>{t('about.valuesText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="section programs-section">
        <div className="container">
          <h2 className="section-title">{t('programs.title')}</h2>
          <p className="section-subtitle">{t('programs.subtitle')}</p>
          <div className="programs-grid">
            <ProgramCard icon="📚" title={t('programs.primary')} desc={t('programs.primaryDesc')} t={t} />
            <ProgramCard icon="🏫" title={t('programs.middle')} desc={t('programs.middleDesc')} t={t} />
            <ProgramCard icon="🎓" title={t('programs.high')} desc={t('programs.highDesc')} t={t} />
            <ProgramCard icon="🎨" title={t('programs.arts')} desc={t('programs.artsDesc')} t={t} />
            <ProgramCard icon="⚽" title={t('programs.sports')} desc={t('programs.sportsDesc')} t={t} />
            <ProgramCard icon="🔬" title={t('programs.stem')} desc={t('programs.stemDesc')} t={t} />
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section id="admissions" className="section admissions-section">
        <div className="container">
          <h2 className="section-title">{t('admissions.title')}</h2>
          <p className="section-subtitle">{t('admissions.subtitle')}</p>
          <div className="admissions-layout">
            <div className="admission-steps">
              <h3 className="admission-subtitle">{t('admissions.process')}</h3>
              <div className="steps-grid">
                <StepCard num="01" title={t('admissions.step1')} desc={t('admissions.step1Desc')} />
                <StepCard num="02" title={t('admissions.step2')} desc={t('admissions.step2Desc')} />
                <StepCard num="03" title={t('admissions.step3')} desc={t('admissions.step3Desc')} />
                <StepCard num="04" title={t('admissions.step4')} desc={t('admissions.step4Desc')} />
              </div>
            </div>
            <div className="fees-card card">
              <h3>{t('admissions.fees')}</h3>
              <div className="fee-items">
                <div className="fee-item">
                  <span className="fee-level">📚</span>
                  <span>{t('admissions.primaryFee')}</span>
                </div>
                <div className="fee-item">
                  <span className="fee-level">🏫</span>
                  <span>{t('admissions.middleFee')}</span>
                </div>
                <div className="fee-item">
                  <span className="fee-level">🎓</span>
                  <span>{t('admissions.highFee')}</span>
                </div>
              </div>
              <div className="deadline-badge">📅 {t('admissions.deadline')}</div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                {t('admissions.applyNow')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-info-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>{t('contact.address')}</strong>
                  <p>{t('contact.addressText')}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>{t('contact.phone')}</strong>
                  <p>+213 21 123 456</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>{t('contact.email')}</strong>
                  <p>info@alnour-academy.dz</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <strong>{t('contact.hours')}</strong>
                  <p>{t('contact.hoursText')}</p>
                </div>
              </div>
            </div>
            <form className="contact-form card" onSubmit={handleContact}>
              {contactSent && <div className="success-msg">✅ {t('contact.success')}</div>}
              <div className="form-group">
                <label>{t('contact.name')}</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t('contact.emailPlaceholder')}</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t('contact.message')}</label>
                <textarea
                  rows={4}
                  value={contactForm.message}
                  onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="school-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span>🎓 Al-Nour Academy</span>
            <p>Algiers, Algeria · Est. 1990</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#admissions">Admissions</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">© 2026 Al-Nour Academy. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}
