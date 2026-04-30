import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

// ─── Stat Card ────────────────────────────────────────────────────────────────
const StatCard = ({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: string
}) => (
  <div style={{ ...dashStyles.statCard, borderTop: `3px solid ${color}` }}>
    <div style={{ ...dashStyles.statIcon, background: `${color}22` }}>{icon}</div>
    <div style={dashStyles.statValue}>{value}</div>
    <div style={dashStyles.statLabel}>{label}</div>
  </div>
)

// ─── Sidebar Item ─────────────────────────────────────────────────────────────
const SideItem = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}) => (
  <button
    onClick={onClick}
    style={{
      ...dashStyles.sideItem,
      background: active ? 'rgba(99,102,241,0.18)' : 'transparent',
      color: active ? '#a5b4fc' : '#8b8fa8',
      borderLeft: active ? '3px solid #6366f1' : '3px solid transparent',
    }}
  >
    <span style={{ opacity: active ? 1 : 0.7 }}>{icon}</span>
    {label}
  </button>
)

// ─── Main Dashboard ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = sessionStorage.getItem('admin_logged_in')
      if (session !== 'true') {
        router.replace('/admin')
      }
    }
    const h = new Date().getHours()
    setGreeting(h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening')
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem('admin_logged_in')
    router.push('/admin')
  }

  const stats = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
          <circle cx="9" cy="7" r="4" stroke="#6366f1" strokeWidth="2" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      label: 'Total Visitors',
      value: '12,483',
      color: '#6366f1',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 18z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Contact Inquiries',
      value: '248',
      color: '#22c55e',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#f59e0b" strokeWidth="2" />
          <path d="M8 21h8M12 17v4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      label: 'Page Views',
      value: '58,210',
      color: '#f59e0b',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Active Sessions',
      value: '37',
      color: '#ec4899',
    },
  ]

  const recentActivity = [
    { action: 'New contact form submission', time: '2 mins ago', type: 'contact' },
    { action: 'Blog page visited 14 times', time: '18 mins ago', type: 'page' },
    { action: 'Case Studies PDF downloaded', time: '35 mins ago', type: 'download' },
    { action: 'New visitor from United States', time: '1 hr ago', type: 'visitor' },
    { action: 'Service page: Research Writing – 8 visits', time: '2 hrs ago', type: 'page' },
  ]

  const activityColor = (type: string) => {
    switch (type) {
      case 'contact': return '#6366f1'
      case 'page': return '#22c55e'
      case 'download': return '#f59e0b'
      case 'visitor': return '#ec4899'
      default: return '#8b8fa8'
    }
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard – Matt Engineering Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={dashStyles.shell}>
        {/* ── Sidebar ── */}
        <aside style={dashStyles.sidebar}>
          <div style={dashStyles.sideTop}>
            <div style={dashStyles.sideLogo}>
              <div style={dashStyles.sideLogoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>Matt Admin</div>
                <div style={{ color: '#6366f1', fontSize: '11px', fontWeight: 500 }}>Dashboard</div>
              </div>
            </div>

            <nav style={dashStyles.nav}>
              <SideItem
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/></svg>}
                label="Overview"
                active={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              <SideItem
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/></svg>}
                label="Contacts"
                active={activeTab === 'contacts'}
                onClick={() => setActiveTab('contacts')}
              />
              <SideItem
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/></svg>}
                label="Pages"
                active={activeTab === 'pages'}
                onClick={() => setActiveTab('pages')}
              />
              <SideItem
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                label="Analytics"
                active={activeTab === 'analytics'}
                onClick={() => setActiveTab('analytics')}
              />
              <SideItem
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" stroke="currentColor" strokeWidth="2"/></svg>}
                label="Settings"
                active={activeTab === 'settings'}
                onClick={() => setActiveTab('settings')}
              />
              <SideItem
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>}
                label="Blog Generator"
                active={false}
                onClick={() => router.push('/admin/blog')}
              />
            </nav>
          </div>

          {/* Logout */}
          <button onClick={handleLogout} style={dashStyles.logoutBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
              <polyline points="16,17 21,12 16,7" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="21" y1="12" x2="9" y2="12" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Logout
          </button>
        </aside>

        {/* ── Main Content ── */}
        <main style={dashStyles.main}>
          {/* Top bar */}
          <div style={dashStyles.topbar}>
            <div>
              <h1 style={dashStyles.pageTitle}>{greeting}, Admin 👋</h1>
              <p style={dashStyles.pageSubtitle}>Here's what's happening with your site today.</p>
            </div>
            <div style={dashStyles.topbarRight}>
              <div style={dashStyles.badge}>
                <div style={dashStyles.badgeDot} />
                Live
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={dashStyles.statsGrid}>
            {stats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>

          {/* Bottom grid */}
          <div style={dashStyles.bottomGrid}>
            {/* Recent Activity */}
            <div style={dashStyles.panel}>
              <div style={dashStyles.panelHeader}>
                <span style={dashStyles.panelTitle}>Recent Activity</span>
                <span style={dashStyles.panelBadge}>{recentActivity.length} events</span>
              </div>
              <div style={dashStyles.activityList}>
                {recentActivity.map((item, i) => (
                  <div key={i} style={dashStyles.activityItem}>
                    <div
                      style={{
                        ...dashStyles.activityDot,
                        background: activityColor(item.type),
                        boxShadow: `0 0 8px ${activityColor(item.type)}66`,
                      }}
                    />
                    <div style={dashStyles.activityText}>
                      <span style={dashStyles.activityAction}>{item.action}</span>
                      <span style={dashStyles.activityTime}>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div style={dashStyles.panel}>
              <div style={dashStyles.panelHeader}>
                <span style={dashStyles.panelTitle}>Quick Actions</span>
              </div>
              <div style={dashStyles.quickLinks}>
                {[
                  { label: 'View Main Site', href: '/', color: '#6366f1' },
                  { label: 'Blog Page', href: '/blog', color: '#22c55e' },
                  { label: 'Case Studies', href: '/case-studies', color: '#f59e0b' },
                  { label: 'Contact Page', href: '/contactuspage', color: '#ec4899' },
                  { label: 'FAQ', href: '/faq', color: '#8b5cf6' },
                  { label: 'Our Gallery', href: '/Our-Gallery', color: '#06b6d4' },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...dashStyles.quickLink,
                      borderLeft: `3px solid ${link.color}`,
                      color: link.color,
                    }}
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; }
        a:hover { opacity: 0.85 !important; }
      `}</style>
    </>
  )
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const dashStyles: Record<string, React.CSSProperties> = {
  shell: {
    display: 'flex',
    minHeight: '100vh',
    background: '#0d0d1a',
    fontFamily: "'Inter', sans-serif",
    color: '#fff',
  },
  sidebar: {
    width: '220px',
    minWidth: '220px',
    background: 'rgba(255,255,255,0.03)',
    borderRight: '1px solid rgba(255,255,255,0.07)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0',
    position: 'sticky',
    top: 0,
    height: '100vh',
  },
  sideTop: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  sideLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '24px 20px',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
  },
  sideLogoIcon: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    padding: '16px 8px',
  },
  sideItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 16px',
    borderRadius: '8px',
    border: 'none',
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    transition: 'all 0.15s ease',
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '16px',
    padding: '10px 16px',
    background: 'rgba(255,107,107,0.1)',
    border: '1px solid rgba(255,107,107,0.2)',
    borderRadius: '10px',
    color: '#ff8a8a',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Inter', sans-serif",
    transition: 'all 0.15s ease',
  },
  main: {
    flex: 1,
    padding: '32px 36px',
    overflowY: 'auto',
    animation: 'fadeIn 0.4s ease',
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '32px',
  },
  pageTitle: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 800,
    color: '#fff',
    letterSpacing: '-0.4px',
  },
  pageSubtitle: {
    margin: '6px 0 0',
    color: '#8b8fa8',
    fontSize: '14px',
  },
  topbarRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(34,197,94,0.12)',
    border: '1px solid rgba(34,197,94,0.25)',
    borderRadius: '20px',
    padding: '6px 14px',
    color: '#22c55e',
    fontSize: '12px',
    fontWeight: 600,
  },
  badgeDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: '#22c55e',
    boxShadow: '0 0 6px #22c55e',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '28px',
  },
  statCard: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    transition: 'transform 0.2s',
  },
  statIcon: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#fff',
    letterSpacing: '-0.5px',
  },
  statLabel: {
    fontSize: '13px',
    color: '#8b8fa8',
    fontWeight: 500,
  },
  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  panel: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '24px',
  },
  panelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  panelTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#fff',
  },
  panelBadge: {
    background: 'rgba(99,102,241,0.15)',
    color: '#a5b4fc',
    borderRadius: '20px',
    padding: '3px 10px',
    fontSize: '11px',
    fontWeight: 600,
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  activityItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  activityDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    flexShrink: 0,
    marginTop: '5px',
  },
  activityText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  activityAction: {
    fontSize: '13px',
    color: '#d1d5db',
    fontWeight: 500,
  },
  activityTime: {
    fontSize: '11px',
    color: '#5a5d75',
  },
  quickLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  quickLink: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 14px',
    background: 'rgba(255,255,255,0.04)',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 600,
    transition: 'opacity 0.15s',
  },
}
