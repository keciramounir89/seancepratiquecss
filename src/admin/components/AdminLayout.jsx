import { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import './AdminLayout.css';

const LANGUAGES = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'fr', label: 'FR', dir: 'ltr' },
  { code: 'ar', label: 'ع', dir: 'rtl' },
];

const NAV_ITEMS = [
  { key: 'dashboard', icon: '📊', path: '/admin/dashboard' },
  { key: 'students', icon: '👨‍🎓', path: '/admin/students' },
  { key: 'teachers', icon: '👨‍🏫', path: '/admin/teachers' },
  { key: 'classes', icon: '🏫', path: '/admin/classes' },
  { key: 'attendance', icon: '✅', path: '/admin/attendance' },
  { key: 'payments', icon: '💳', path: '/admin/payments' },
  { key: 'announcements', icon: '📢', path: '/admin/announcements' },
  { key: 'settings', icon: '⚙️', path: '/admin/settings' },
];

export default function AdminLayout() {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const changeLanguage = (code, dir) => {
    i18n.changeLanguage(code);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', code);
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`admin-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      {/* Mobile overlay */}
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}

      {/* SIDEBAR */}
      <aside className={`admin-sidebar ${mobileOpen ? 'mobile-visible' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="sidebar-brand-icon">🎓</span>
            {sidebarOpen && (
              <div className="sidebar-brand-text">
                <span className="sidebar-brand-name">Al-Nour</span>
                <span className="sidebar-brand-sub">Academy Admin</span>
              </div>
            )}
          </div>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.key}
              className={`sidebar-nav-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => { navigate(item.path); setMobileOpen(false); }}
              title={!sidebarOpen ? t(`admin.${item.key}`) : ''}
            >
              <span className="nav-item-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-item-label">{t(`admin.${item.key}`)}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          {sidebarOpen && (
            <div className="sidebar-user">
              <div className="sidebar-user-avatar">{user?.name?.[0] || 'A'}</div>
              <div className="sidebar-user-info">
                <span className="sidebar-user-name">{user?.name}</span>
                <span className="sidebar-user-role">{user?.role}</span>
              </div>
            </div>
          )}
          <button className="sidebar-logout" onClick={handleLogout} title={t('admin.logout')}>
            <span>🚪</span>
            {sidebarOpen && <span>{t('admin.logout')}</span>}
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="admin-main">
        {/* TOPBAR */}
        <header className="admin-topbar">
          <div className="topbar-left">
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
              ☰
            </button>
            <h1 className="topbar-title">
              {NAV_ITEMS.find(i => i.path === location.pathname)
                ? t(`admin.${NAV_ITEMS.find(i => i.path === location.pathname)?.key}`)
                : 'Admin Panel'}
            </h1>
          </div>
          <div className="topbar-right">
            <div className="lang-switcher-admin">
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  className={`lang-btn-admin ${i18n.language === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code, lang.dir)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <button className="theme-toggle-admin" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="topbar-user">
              <div className="topbar-avatar">{user?.name?.[0] || 'A'}</div>
              <span className="topbar-username">{user?.name}</span>
            </div>
          </div>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
