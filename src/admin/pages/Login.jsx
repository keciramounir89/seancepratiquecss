import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import './Login.css';

const LANGUAGES = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'fr', label: 'FR', dir: 'ltr' },
  { code: 'ar', label: 'ع', dir: 'rtl' },
];

export default function Login() {
  const { t, i18n } = useTranslation();
  const { login } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    const result = login(email, password);
    setLoading(false);
    if (result.success) {
      navigate('/admin/dashboard');
    } else {
      setError(t('login.error'));
    }
  };

  const changeLanguage = (code, dir) => {
    i18n.changeLanguage(code);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', code);
  };

  return (
    <div className="login-page">
      <div className="login-controls">
        <div className="lang-switcher-login">
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
        <button className="theme-toggle-login" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <div className="login-left">
        <div className="login-brand">
          <span className="login-brand-icon">🎓</span>
          <div>
            <h2>Al-Nour Academy</h2>
            <p>School Management System</p>
          </div>
        </div>
        <div className="login-features">
          <div className="login-feature">
            <span>👥</span>
            <span>Student & Teacher Management</span>
          </div>
          <div className="login-feature">
            <span>📊</span>
            <span>Analytics & Reporting</span>
          </div>
          <div className="login-feature">
            <span>💳</span>
            <span>Fee & Payment Tracking</span>
          </div>
          <div className="login-feature">
            <span>📅</span>
            <span>Attendance Management</span>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h1 className="login-title">{t('login.title')}</h1>
          <p className="login-subtitle">{t('login.subtitle')}</p>

          <div className="login-hint">
            <span>💡</span>
            <span>{t('login.hint')}</span>
          </div>

          {error && (
            <div className="login-error">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-field">
              <label>{t('login.email')}</label>
              <div className="input-wrapper">
                <span className="input-icon">✉️</span>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="admin@school.dz"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="login-field">
              <label>{t('login.password')}</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
                <button type="button" className="pwd-toggle" onClick={() => setShowPwd(!showPwd)}>
                  {showPwd ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <span className="spinner" />
              ) : (
                t('login.submit')
              )}
            </button>
          </form>

          <button className="back-to-site" onClick={() => navigate('/')}>
            ← Back to School Website
          </button>
        </div>
      </div>
    </div>
  );
}
