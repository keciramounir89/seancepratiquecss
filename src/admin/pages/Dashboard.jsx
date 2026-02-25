import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { mockStats, mockStudents, mockEvents, mockAttendance, mockAnnouncements } from '../../data/mockData';
import './Dashboard.css';

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div className="dash-stat-card card">
      <div className="dash-stat-icon" style={{ background: color + '18', color }}>
        {icon}
      </div>
      <div className="dash-stat-content">
        <p className="dash-stat-label">{label}</p>
        <h3 className="dash-stat-value">{value}</h3>
        {sub && <p className="dash-stat-sub">{sub}</p>}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const recentStudents = mockStudents.slice(0, 5);
  const recentAnnouncements = mockAnnouncements.slice(0, 3);

  return (
    <div className="dashboard">
      <div className="dash-welcome">
        <div>
          <h2 className="dash-welcome-title">{t('admin.welcome')}, {user?.name} 👋</h2>
          <p className="dash-welcome-sub">{t('admin.overview')} · Al-Nour Academy</p>
        </div>
        <div className="dash-date">
          {new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="dash-stats-grid">
        <StatCard icon="👨‍🎓" label={t('admin.totalStudents')} value={mockStats.totalStudents.toLocaleString()} sub="+12 this month" color="#2563eb" />
        <StatCard icon="👨‍🏫" label={t('admin.totalTeachers')} value={mockStats.totalTeachers} sub="All active" color="#16a34a" />
        <StatCard icon="🏫" label={t('admin.totalClasses')} value={mockStats.totalClasses} sub="Grades 1-12" color="#9333ea" />
        <StatCard icon="💰" label={t('admin.revenue')} value={`${(mockStats.monthlyRevenue / 1000).toFixed(0)}K DZD`} sub="+8% vs last month" color="#ea580c" />
      </div>

      {/* CHARTS ROW */}
      <div className="dash-mid-grid">
        {/* Attendance Chart */}
        <div className="card dash-chart-card">
          <h3 className="card-section-title">{t('admin.attendanceRate')}</h3>
          <div className="attendance-chart">
            {mockAttendance.map((item, i) => (
              <div key={i} className="chart-bar-group">
                <div className="chart-bar-wrap">
                  <div
                    className="chart-bar"
                    style={{ height: `${item.rate}%` }}
                    title={`${item.rate}%`}
                  />
                </div>
                <span className="chart-bar-label">{item.month}</span>
                <span className="chart-bar-val">{item.rate}%</span>
              </div>
            ))}
          </div>
          <div className="attendance-summary">
            <span className="badge badge-success">Current: {mockStats.attendanceRate}%</span>
            <span className="text-muted" style={{ fontSize: '0.82rem' }}>Monthly average</span>
          </div>
        </div>

        {/* Quick stats */}
        <div className="card dash-quick-card">
          <h3 className="card-section-title">Quick Stats</h3>
          <div className="quick-stats">
            <div className="quick-stat-item">
              <div className="quick-stat-bar-bg">
                <div className="quick-stat-bar" style={{ width: `${mockStats.attendanceRate}%`, background: '#16a34a' }} />
              </div>
              <div className="quick-stat-label">
                <span>{t('admin.attendanceRate')}</span>
                <span>{mockStats.attendanceRate}%</span>
              </div>
            </div>
            <div className="quick-stat-item">
              <div className="quick-stat-bar-bg">
                <div className="quick-stat-bar" style={{ width: `${mockStats.passRate}%`, background: '#2563eb' }} />
              </div>
              <div className="quick-stat-label">
                <span>Pass Rate</span>
                <span>{mockStats.passRate}%</span>
              </div>
            </div>
            <div className="quick-stat-item">
              <div className="quick-stat-bar-bg">
                <div className="quick-stat-bar" style={{ width: '78%', background: '#9333ea' }} />
              </div>
              <div className="quick-stat-label">
                <span>Fees Collected</span>
                <span>78%</span>
              </div>
            </div>
          </div>

          <h3 className="card-section-title" style={{ marginTop: '1.5rem' }}>{t('admin.upcomingEvents')}</h3>
          <div className="upcoming-events">
            {mockEvents.slice(0, 3).map(ev => (
              <div key={ev.id} className="event-item">
                <div className={`event-dot event-${ev.type}`} />
                <div>
                  <p className="event-title">{ev.title}</p>
                  <p className="event-date">{new Date(ev.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="dash-bottom-grid">
        {/* Recent Students */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-section-title">{t('admin.recentStudents')}</h3>
          </div>
          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>{t('admin.name')}</th>
                  <th>{t('admin.grade')}</th>
                  <th>{t('admin.status')}</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map(s => (
                  <tr key={s.id}>
                    <td>
                      <div className="student-cell">
                        <div className="student-avatar">{s.name[0]}</div>
                        <span>{s.name}</span>
                      </div>
                    </td>
                    <td>{s.grade}</td>
                    <td>
                      <span className={`badge badge-${s.status === 'active' ? 'success' : 'danger'}`}>
                        {s.status === 'active' ? t('admin.active') : t('admin.inactive')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Announcements */}
        <div className="card">
          <h3 className="card-section-title">{t('admin.announcements')}</h3>
          <div className="dash-announcements">
            {recentAnnouncements.map(ann => (
              <div key={ann.id} className="announcement-item">
                <div className={`ann-priority ann-priority-${ann.priority}`} />
                <div className="ann-content">
                  <p className="ann-title">{ann.title}</p>
                  <p className="ann-text">{ann.content.substring(0, 80)}...</p>
                  <p className="ann-date">{new Date(ann.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
