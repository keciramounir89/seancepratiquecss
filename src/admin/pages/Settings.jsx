import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import './AdminTable.css';

export default function Settings() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (code, dir) => {
    i18n.changeLanguage(code);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', code);
  };

  return (
    <div className="admin-table-page">
      <div className="page-header">
        <h2 className="page-title">{t('admin.settings')}</h2>
      </div>

      <div className="settings-grid">
        {/* Theme */}
        <div className="card settings-section">
          <h3 className="settings-section-title">🎨 Appearance</h3>
          <div className="settings-row">
            <div>
              <p className="settings-row-label">Theme</p>
              <p className="settings-row-desc">Switch between light and dark mode</p>
            </div>
            <button className="theme-toggle-big" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="card settings-section">
          <h3 className="settings-section-title">🌐 Language</h3>
          <div className="lang-options">
            {[
              { code: 'en', dir: 'ltr', label: 'English', native: 'English' },
              { code: 'fr', dir: 'ltr', label: 'French', native: 'Français' },
              { code: 'ar', dir: 'rtl', label: 'Arabic', native: 'العربية' },
            ].map(lang => (
              <button
                key={lang.code}
                className={`lang-option-btn ${i18n.language === lang.code ? 'active' : ''}`}
                onClick={() => changeLanguage(lang.code, lang.dir)}
              >
                <span className="lang-option-native">{lang.native}</span>
                <span className="lang-option-label">{lang.label}</span>
                {i18n.language === lang.code && <span className="lang-check">✓</span>}
              </button>
            ))}
          </div>
        </div>

        {/* School Info */}
        <div className="card settings-section">
          <h3 className="settings-section-title">🏫 School Information</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'School Name', value: 'Al-Nour Academy' },
              { label: 'Address', value: '123 Education Avenue, Algiers' },
              { label: 'Phone', value: '+213 21 123 456' },
              { label: 'Email', value: 'info@alnour-academy.dz' },
              { label: 'Founded', value: '1990' },
            ].map(item => (
              <div key={item.label} className="info-row">
                <label className="info-row-label">{item.label}</label>
                <input className="info-row-input" defaultValue={item.value} />
              </div>
            ))}
            <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>{t('admin.save')}</button>
          </div>
        </div>

        {/* Account */}
        <div className="card settings-section">
          <h3 className="settings-section-title">👤 Account</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Full Name', value: 'Ahmed Benkhelil' },
              { label: 'Email', value: 'admin@school.dz' },
              { label: 'Role', value: 'Super Admin' },
            ].map(item => (
              <div key={item.label} className="info-row">
                <label className="info-row-label">{item.label}</label>
                <input className="info-row-input" defaultValue={item.value} readOnly={item.label === 'Role'} />
              </div>
            ))}
            <div className="info-row">
              <label className="info-row-label">New Password</label>
              <input className="info-row-input" type="password" placeholder="••••••••" />
            </div>
            <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Update Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
