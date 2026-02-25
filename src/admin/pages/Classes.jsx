import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockClasses } from '../../data/mockData';
import './AdminTable.css';

export default function Classes() {
  const { t } = useTranslation();
  const [classes, setClasses] = useState(mockClasses);
  const [search, setSearch] = useState('');

  const filtered = classes.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.teacher.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Delete this class?')) {
      setClasses(prev => prev.filter(c => c.id !== id));
    }
  };

  const gradeColors = {
    '1st': '#2563eb', '2nd': '#2563eb', '3rd': '#16a34a', '4th': '#16a34a',
    '5th': '#9333ea', '6th': '#9333ea', '7th': '#ea580c', '8th': '#ea580c',
    '9th': '#0891b2', '10th': '#0891b2', '11th': '#d97706', '12th': '#d97706',
  };

  return (
    <div className="admin-table-page">
      <div className="page-header">
        <h2 className="page-title">{t('admin.classes')}</h2>
        <button className="btn btn-primary">+ {t('admin.addClass')}</button>
      </div>

      <div className="classes-summary">
        {['Primary (1-5)', 'Middle (6-9)', 'High (10-12)'].map((level, i) => (
          <div key={i} className="class-level-card card">
            <span className="class-level-icon">{['📚','🏫','🎓'][i]}</span>
            <div>
              <p className="class-level-name">{level}</p>
              <p className="class-level-count">{[5, 4, 3][i]} classes</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="table-controls">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder={t('admin.search')}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <span className="record-count">{filtered.length} classes</span>
        </div>

        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>{t('admin.grade')}</th>
                <th>Teacher</th>
                <th>{t('admin.students_count')}</th>
                <th>Room</th>
                <th>Schedule</th>
                <th>{t('admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(cls => (
                <tr key={cls.id}>
                  <td>
                    <div className="class-name-cell">
                      <div
                        className="class-badge"
                        style={{ background: gradeColors[cls.grade] + '20', color: gradeColors[cls.grade] }}
                      >
                        {cls.name}
                      </div>
                    </div>
                  </td>
                  <td>{cls.grade}</td>
                  <td>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cls.teacher}</div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div className="mini-progress-bg">
                        <div className="mini-progress-bar" style={{ width: `${(cls.students / 35) * 100}%` }} />
                      </div>
                      <span>{cls.students}</span>
                    </div>
                  </td>
                  <td><span className="badge badge-info">Room {cls.room}</span></td>
                  <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cls.schedule}</td>
                  <td>
                    <div className="action-btns">
                      <button className="btn btn-outline btn-sm">{t('admin.edit')}</button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cls.id)}>{t('admin.delete')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
