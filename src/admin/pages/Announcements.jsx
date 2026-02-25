import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockAnnouncements } from '../../data/mockData';
import './AdminTable.css';

export default function Announcements() {
  const { t } = useTranslation();
  const [announcements, setAnnouncements] = useState(mockAnnouncements);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: '', content: '', priority: 'medium' });

  const handleDelete = (id) => {
    if (window.confirm('Delete this announcement?')) {
      setAnnouncements(prev => prev.filter(a => a.id !== id));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setAnnouncements(prev => [{
      ...form,
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
    }, ...prev]);
    setForm({ title: '', content: '', priority: 'medium' });
    setShowModal(false);
  };

  const priorityColor = { high: 'badge-danger', medium: 'badge-warning', low: 'badge-success' };

  return (
    <div className="admin-table-page">
      <div className="page-header">
        <h2 className="page-title">{t('admin.announcements')}</h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ New Announcement</button>
      </div>

      <div className="announcements-list">
        {announcements.map(ann => (
          <div key={ann.id} className="card ann-card">
            <div className="ann-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className={`badge ${priorityColor[ann.priority]}`}>{ann.priority}</span>
                <h3 className="ann-card-title">{ann.title}</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {new Date(ann.date).toLocaleDateString()}
                </span>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(ann.id)}>
                  {t('admin.delete')}
                </button>
              </div>
            </div>
            <p className="ann-card-content">{ann.content}</p>
          </div>
        ))}
        {announcements.length === 0 && (
          <div className="card" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            No announcements yet
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>New Announcement</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <form onSubmit={handleSave} className="modal-form">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label>Title</label>
                  <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label>Content</label>
                  <textarea rows={4} value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label>Priority</label>
                  <select value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
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
