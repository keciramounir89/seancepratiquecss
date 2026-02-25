import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import './SchoolNavbar.css';

const LANGUAGES = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'fr', label: 'FR', dir: 'ltr' },
  { code: 'ar', label: 'ع', dir: 'rtl' },
];

export default function SchoolNavbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (code, dir) => {
    i18n.changeLanguage(code);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', code);
    setMenuOpen(false);
  };

  const navLinks = ['home', 'about', 'programs', 'admissions', 'contact'];

  return (
    <nav className={`school-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🎓</span>
          <span className="brand-name">Al-Nour Academy</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(key => (
            <a
              key={key}
              href={`#${key}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <button className="nav-link nav-admin-btn" onClick={() => { navigate('/admin/login'); setMenuOpen(false); }}>
            {t('nav.login')}
          </button>
        </div>

        <div className="navbar-controls">
          <div className="lang-switcher">
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                onClick={() => changeLanguage(lang.code, lang.dir)}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button className="theme-toggle" onClick={toggleTheme} title={theme === 'light' ? t('theme.dark') : t('theme.light')}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
