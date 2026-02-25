import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockStudents } from '../../data/mockData';
import './AdminTable.css';

export default function Students() {
  const { t } = useTranslation();
  const [students, setStudents] = useState(mockStudents);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [form, setForm] = useState({ name: '', grade: '', email: '', phone: '', status: 'active' });

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.grade.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditStudent(null);
    setForm({ name: '', grade: '', email: '', phone: '', status: 'active' });
    setShowModal(true);
  };

  const openEdit = (s) => {
    setEditStudent(s);
    setForm({ name: s.name, grade: s.grade, email: s.email, phone: s.phone, status: s.status });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this student?')) {
      setStudents(prev => prev.filter(s => s.id !== id));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editStudent) {
      setStudents(prev => prev.map(s => s.id === editStudent.id ? { ...s, ...form } : s));
    } else {
      const newStudent = { ...form, id: Date.now(), class: form.grade + '-A', enrolled: new Date().toISOString().slice(0, 10), fees: 'pending' };
      setStudents(prev => [...prev, newStudent]);
    }
    setShowModal(false);
  };

  const feeColor = { paid: 'badge-success', pending: 'badge-warning', overdue: 'badge-danger' };

  return (
    <div className="admin-table-page">
      <div className="page-header">
        <h2 className="page-title">{t('admin.students')}</h2>
        <button className="btn btn-primary" onClick={openAdd}>+ {t('admin.addStudent')}</button>
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
                <th>{t('admin.grade')}</th>
                <th>Class</th>
                <th>Email</th>
                <th>Fees</th>
                <th>{t('admin.status')}</th>
                <th>{t('admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id}>
                  <td>
                    <div className="name-cell">
                      <div className="name-avatar">{s.name[0]}</div>
                      <div>
                        <p className="name-main">{s.name}</p>
                        <p className="name-sub">{s.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td>{s.grade}</td>
                  <td><span className="badge badge-info">{s.class}</span></td>
                  <td className="email-cell">{s.email}</td>
                  <td><span className={`badge ${feeColor[s.fees] || 'badge-info'}`}>{s.fees}</span></td>
                  <td>
                    <span className={`badge ${s.status === 'active' ? 'badge-success' : 'badge-danger'}`}>
                      {s.status === 'active' ? t('admin.active') : t('admin.inactive')}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button className="btn btn-outline btn-sm" onClick={() => openEdit(s)}>{t('admin.edit')}</button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(s.id)}>{t('admin.delete')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="empty-state">No students found</div>
          )}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editStudent ? t('admin.edit') : t('admin.addStudent')}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <form onSubmit={handleSave} className="modal-form">
              <div className="modal-grid">
                <div className="form-group">
                  <label>{t('admin.name')}</label>
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label>{t('admin.grade')}</label>
                  <select value={form.grade} onChange={e => setForm(f => ({ ...f, grade: e.target.value }))} required>
                    <option value="">Select grade</option>
                    {['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
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
