import { useTranslation } from 'react-i18next';
import { mockStudents, mockAttendance } from '../../data/mockData';
import './AdminTable.css';

export default function Attendance() {
  const { t } = useTranslation();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
  const weeks = ['Feb 16-20', 'Feb 23-27'];

  const getStatus = () => {
    const r = Math.random();
    if (r > 0.92) return 'A';
    if (r > 0.85) return 'L';
    return 'P';
  };

  const statusColor = { P: 'badge-success', A: 'badge-danger', L: 'badge-warning' };
  const statusLabel = { P: 'Present', A: 'Absent', L: 'Late' };

  const attendanceData = mockStudents.slice(0, 8).map(s => ({
    ...s,
    attendance: days.map(() => getStatus()),
  }));

  return (
    <div className="admin-table-page">
      <div className="page-header">
        <h2 className="page-title">{t('admin.attendance')}</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <select className="week-select" defaultValue="Feb 23-27">
            {weeks.map(w => <option key={w}>{w}</option>)}
          </select>
        </div>
      </div>

      <div className="att-summary-grid">
        <div className="card att-summary-card">
          <span className="att-summary-icon" style={{ color: '#16a34a' }}>✅</span>
          <p className="att-summary-label">Present Today</p>
          <p className="att-summary-value">284</p>
        </div>
        <div className="card att-summary-card">
          <span className="att-summary-icon" style={{ color: '#dc2626' }}>❌</span>
          <p className="att-summary-label">Absent Today</p>
          <p className="att-summary-value">17</p>
        </div>
        <div className="card att-summary-card">
          <span className="att-summary-icon" style={{ color: '#d97706' }}>⏰</span>
          <p className="att-summary-label">Late Today</p>
          <p className="att-summary-value">7</p>
        </div>
        <div className="card att-summary-card">
          <span className="att-summary-icon" style={{ color: '#2563eb' }}>📊</span>
          <p className="att-summary-label">Weekly Rate</p>
          <p className="att-summary-value">94.5%</p>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Week of Feb 23-27, 2026
        </h3>
        <div className="att-legend">
          {Object.entries(statusLabel).map(([k, v]) => (
            <span key={k} className={`badge ${statusColor[k]}`}>{k} = {v}</span>
          ))}
        </div>
        <div className="table-wrap" style={{ marginTop: '1rem' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Student</th>
                {days.map(d => <th key={d}>{d}</th>)}
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map(s => {
                const presentCount = s.attendance.filter(a => a === 'P').length;
                const rate = Math.round((presentCount / days.length) * 100);
                return (
                  <tr key={s.id}>
                    <td>
                      <div className="name-cell">
                        <div className="name-avatar">{s.name[0]}</div>
                        <div>
                          <p className="name-main">{s.name}</p>
                          <p className="name-sub">{s.class}</p>
                        </div>
                      </div>
                    </td>
                    {s.attendance.map((status, i) => (
                      <td key={i}>
                        <span className={`badge ${statusColor[status]}`}>{status}</span>
                      </td>
                    ))}
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div className="mini-progress-bg" style={{ width: 48 }}>
                          <div className="mini-progress-bar" style={{ width: `${rate}%`, background: rate >= 80 ? 'var(--success)' : rate >= 60 ? 'var(--warning)' : 'var(--danger)' }} />
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rate}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
