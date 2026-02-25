import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockTeachers } from '../../data/mockData';
import './AdminTable.css';

export default function Teachers() {
  const { t } = useTranslation();
  const [teachers, setTeachers] = useState(mockTeachers);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editTeacher, setEditTeacher] = useState(null);
  const [form, setForm] = useState({ name: '', subject: '', email: '', phone: '', experience: '', status: 'active' });

  const filtered = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.subject.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditTeacher(null);
    setForm({ name: '', subject: '', email: '', phone: '', experience: '', status: 'active' });
    setShowModal(true);
  };

  const openEdit = (teacher) => {
    setEditTeacher(teacher);
    setForm({ name: teacher.name, subject: teacher.subject, email: teacher.email, phone: teacher.phone, experience: teacher.experience, status: teacher.status });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this teacher?')) {
      setTeachers(prev => prev.filter(t => t.id !== id));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editTeacher) {
      setTeachers(prev => prev.map(t => t.id === editTeacher.id ? { ...t, ...form } : t));
    } else {
      setTeachers(prev => [...prev, { ...form, id: Date.now(), classes: [] }]);
    }
    setShowModal(false);
  };

  return (
    <div className="admin-table-page">
      <div className="page-header">
        <h2 className="page-title">{t('admin.teachers')}</h2>
        <button className="btn btn-primary" onClick={openAdd}>+ {t('admin.addTeacher')}</button>
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
          <span className="record-count">{filtered.length} records</span>
        </div>

        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t('admin.name')}</th>
                <th>{t('admin.subject')}</th>
                <th>Classes</th>
                <th>Experience</th>
                <th>{t('admin.status')}</th>
                <th>{t('admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(teacher => (
                <tr key={teacher.id}>
                  <td>
                    <div className="name-cell">
                      <div className="name-avatar" style={{ background: '#9333ea' }}>{teacher.name[0]}</div>
                      <div>
                        <p className="name-main">{teacher.name}</p>
                        <p className="name-sub">{teacher.email}</p>
                      </div>
                    </div>
                  </td>
                  <td><span className="badge badge-info">{teacher.subject}</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      {teacher.classes.map(c => (
                        <span key={c} className="badge badge-info" style={{ fontSize: '0.72rem' }}>{c}</span>
                      ))}
                    </div>
                  </td>
                  <td>{teacher.experience}</td>
                  <td>
                    <span className={`badge ${teacher.status === 'active' ? 'badge-success' : 'badge-danger'}`}>
                      {teacher.status === 'active' ? t('admin.active') : t('admin.inactive')}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button className="btn btn-outline btn-sm" onClick={() => openEdit(teacher)}>{t('admin.edit')}</button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(teacher.id)}>{t('admin.delete')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <div className="empty-state">No teachers found</div>}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editTeacher ? t('admin.edit') : t('admin.addTeacher')}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <form onSubmit={handleSave} className="modal-form">
              <div className="modal-grid">
                <div className="form-group">
                  <label>{t('admin.name')}</label>
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label>{t('admin.subject')}</label>
                  <input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>Experience</label>
                  <input value={form.experience} onChange={e => setForm(f => ({ ...f, experience: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>{t('admin.status')}</label>
                  <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
                    <option value="active">{t('admin.active')}</option>
                    <option value="inactive">{t('admin.inactive')}</option>
                  </select>
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>{t('admin.cancel')}</button>
                <button type="submit" className="btn btn-primary">{t('admin.save')}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
