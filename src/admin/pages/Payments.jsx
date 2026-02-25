import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockPayments } from '../../data/mockData';
import './AdminTable.css';

export default function Payments() {
  const { t } = useTranslation();
  const [payments] = useState(mockPayments);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? payments : payments.filter(p => p.status === filter);

  const totalPaid = payments.filter(p => p.status === 'paid').reduce((s, p) => s + p.amount, 0);
  const totalPending = payments.filter(p => p.status !== 'paid').reduce((s, p) => s + p.amount, 0);

  const statusColor = { paid: 'badge-success', pending: 'badge-warning', overdue: 'badge-danger' };

  return (
    <div className="admin-table-page">
      <div className="page-header">
        <h2 className="page-title">{t('admin.payments')}</h2>
      </div>

      <div className="payment-summary">
        <div className="card pay-sum-card">
          <p className="pay-sum-label">Total Collected</p>
          <p className="pay-sum-value">{totalPaid.toLocaleString()} DZD</p>
          <span className="badge badge-success">Paid</span>
        </div>
        <div className="card pay-sum-card">
          <p className="pay-sum-label">Outstanding</p>
          <p className="pay-sum-value">{totalPending.toLocaleString()} DZD</p>
          <span className="badge badge-warning">Pending</span>
        </div>
        <div className="card pay-sum-card">
          <p className="pay-sum-label">Collection Rate</p>
          <p className="pay-sum-value">78%</p>
          <span className="badge badge-info">Term 2</span>
        </div>
      </div>

      <div className="card">
        <div className="table-controls">
          <div className="filter-tabs">
            {['all', 'paid', 'pending', 'overdue'].map(f => (
              <button
                key={f}
                className={`filter-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <span className="record-count">{filtered.length} records</span>
        </div>

        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Amount</th>
                <th>Term</th>
                <th>Date Paid</th>
                <th>Status</th>
                <th>{t('admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td>
                    <div className="name-cell">
                      <div className="name-avatar" style={{ background: '#ea580c' }}>{p.student[0]}</div>
                      <span className="name-main">{p.student}</span>
                    </div>
                  </td>
                  <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                    {p.amount.toLocaleString()} DZD
                  </td>
                  <td>{p.term}</td>
                  <td style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {p.date ? new Date(p.date).toLocaleDateString() : '—'}
                  </td>
                  <td>
                    <span className={`badge ${statusColor[p.status]}`}>{p.status}</span>
                  </td>
                  <td>
                    <div className="action-btns">
                      {p.status !== 'paid' && (
                        <button className="btn btn-primary btn-sm">Mark Paid</button>
                      )}
                      <button className="btn btn-outline btn-sm">Receipt</button>
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
