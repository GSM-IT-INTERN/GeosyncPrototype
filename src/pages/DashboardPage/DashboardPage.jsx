import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GeoSyncLogo from '../../components/GeoSyncLogo.jsx'
import './DashboardPage.css'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <GridIcon /> },
  { id: 'operations', label: 'Operations', icon: <LayersIcon /> },
  { id: 'collaboration', label: 'Collaboration', icon: <UsersIcon /> },
  { id: 'reports', label: 'Reports', icon: <BarChartIcon /> },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
]

const STAT_CARDS = [
  { label: 'Active Tasks', value: '142', delta: '+12%', positive: true, icon: <TaskIcon /> },
  { label: 'Departments', value: '8', delta: '0%', positive: true, icon: <OrgIcon /> },
  { label: 'Pending Reviews', value: '27', delta: '+5', positive: false, icon: <ClockIcon /> },
  { label: 'System Health', value: '99.8%', delta: 'Optimal', positive: true, icon: <PulseIcon /> },
]

const RECENT_ACTIVITY = [
  { user: 'Maria Santos', action: 'Submitted Q3 Operations Report', time: '2 min ago', type: 'report' },
  { user: 'Carlos Reyes', action: 'Approved budget allocation for Dept. 4', time: '18 min ago', type: 'approval' },
  { user: 'Ana Lim', action: 'Opened new collaboration workspace', time: '1 hr ago', type: 'collab' },
  { user: 'Jose Mendoza', action: 'Updated role permissions for Team B', time: '3 hr ago', type: 'admin' },
  { user: 'Elena Cruz', action: 'Flagged anomaly in logistics data', time: '5 hr ago', type: 'alert' },
]

export default function DashboardPage() {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <div className="dashboard">
      {/* ── Sidebar ── */}
      <aside className="dashboard__sidebar">
        <div className="dashboard__sidebar-logo">
          <GeoSyncLogo size="sm" theme="light" />
        </div>

        <nav className="dashboard__nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`dashboard__nav-item ${activeNav === item.id ? 'dashboard__nav-item--active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              <span className="dashboard__nav-icon">{item.icon}</span>
              <span className="dashboard__nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          className="dashboard__logout"
          onClick={() => navigate('/login')}
        >
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </aside>

      {/* ── Main content ── */}
      <div className="dashboard__body">
        {/* Top bar */}
        <header className="dashboard__topbar">
          <div className="dashboard__topbar-left">
            <h1 className="dashboard__page-title">Dashboard</h1>
            <p className="dashboard__page-sub">Good morning — here's what's happening today.</p>
          </div>
          <div className="dashboard__topbar-right">
            <div className="dashboard__search">
              <SearchIcon />
              <input type="text" placeholder="Search..." className="dashboard__search-input" />
            </div>
            <div className="dashboard__avatar">JS</div>
          </div>
        </header>

        {/* Content */}
        <main className="dashboard__content">
          {/* Stat cards */}
          <section className="dashboard__stats">
            {STAT_CARDS.map((card) => (
              <div key={card.label} className="stat-card">
                <div className="stat-card__icon">{card.icon}</div>
                <div className="stat-card__body">
                  <span className="stat-card__label">{card.label}</span>
                  <span className="stat-card__value">{card.value}</span>
                  <span className={`stat-card__delta ${card.positive ? 'stat-card__delta--up' : 'stat-card__delta--down'}`}>
                    {card.delta}
                  </span>
                </div>
              </div>
            ))}
          </section>

          <div className="dashboard__row">
            {/* Activity feed */}
            <section className="dashboard__panel dashboard__activity">
              <div className="dashboard__panel-header">
                <h2 className="dashboard__panel-title">Recent Activity</h2>
                <button className="dashboard__panel-action">View all</button>
              </div>
              <ul className="activity-list">
                {RECENT_ACTIVITY.map((item, i) => (
                  <li key={i} className="activity-item">
                    <div className={`activity-item__dot activity-item__dot--${item.type}`} />
                    <div className="activity-item__body">
                      <p className="activity-item__action">
                        <strong>{item.user}</strong> {item.action}
                      </p>
                      <span className="activity-item__time">{item.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick access */}
            <section className="dashboard__panel dashboard__quick">
              <div className="dashboard__panel-header">
                <h2 className="dashboard__panel-title">Quick Access</h2>
              </div>
              <div className="quick-grid">
                {[
                  { label: 'New Task', icon: <TaskIcon /> },
                  { label: 'Upload File', icon: <UploadIcon /> },
                  { label: 'Schedule', icon: <CalendarIcon /> },
                  { label: 'Messages', icon: <MessageIcon /> },
                ].map((q) => (
                  <button key={q.label} className="quick-item">
                    <span className="quick-item__icon">{q.icon}</span>
                    <span className="quick-item__label">{q.label}</span>
                  </button>
                ))}
              </div>

              {/* Mini info card */}
              <div className="dashboard__info-card">
                <div className="dashboard__info-card-icon"><ShieldIcon /></div>
                <div>
                  <p className="dashboard__info-card-title">Access Level</p>
                  <p className="dashboard__info-card-value">Administrator</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

/* ─── Icons ─── */
function GridIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
}
function LayersIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
}
function UsersIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
}
function BarChartIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
}
function SettingsIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
}
function LogoutIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
}
function SearchIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
}
function TaskIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
}
function OrgIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="9" y="14" width="6" height="6" rx="1"/><rect x="16" y="7" width="6" height="6" rx="1"/><line x1="8" y1="10" x2="9" y2="10"/><line x1="15" y1="10" x2="16" y2="10"/><line x1="12" y1="8" x2="12" y2="14"/></svg>
}
function ClockIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function PulseIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
}
function UploadIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
}
function CalendarIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
}
function MessageIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
}
function ShieldIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
}
