import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

type Section = { heading: string; content: string }
type KeyPoint = { point: string; description: string }
type Challenge = { title: string; description: string }
type BestPractice = { title: string; description: string }
type Stat = { value: string; label: string; source: string }
type BlogResult = {
  id?: string;
  title: string; subtitle: string; category: string; tags: string[]; readTime: string
  introduction: string
  overview: { heading: string; content: string } | null
  sections: Section[]; keyPoints: KeyPoint[]; challenges: Challenge[]
  bestPractices: BestPractice[]; statistics: Stat[]
  keyTakeaways: string[]; conclusion: string
  imageUrl: string; query: string; generatedAt: string
  expertInsight?: string
  didYouKnow?: string[]
  caseStudy?: { title: string; body: string }
  faq?: { q: string; a: string }[]
  furtherReading?: { title: string; description: string }[]
}

export default function AdminBlog() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<BlogResult | null>(null)
  const [showReadMore, setShowReadMore] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const [manageLoading, setManageLoading] = useState(false)
  const [manageSuccess, setManageSuccess] = useState('')
  const [scheduleMode, setScheduleMode] = useState(false)
  const [scheduleDate, setScheduleDate] = useState('')

  // Manage Dashboard states
  const [activeTab, setActiveTab] = useState<'generate' | 'manage'>('generate')
  const [adminBlogs, setAdminBlogs] = useState<any[]>([])
  const [dashLoading, setDashLoading] = useState(false)
  
  // Modal states
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false)
  const [scheduleModalBlogId, setScheduleModalBlogId] = useState('')
  const [scheduleModalDate, setScheduleModalDate] = useState('')

  const fetchAdminBlogs = async () => {
    setDashLoading(true)
    try {
      const res = await fetch('/api/admin/blogs')
      const data = await res.json()
      setAdminBlogs(data.blogs || [])
    } catch (err) {
      console.error('Failed to fetch admin blogs', err)
    } finally {
      setDashLoading(false)
    }
  }

  useEffect(() => {
    if (activeTab === 'manage') {
      fetchAdminBlogs()
    }
  }, [activeTab])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('admin_logged_in') !== 'true') {
        router.replace('/admin')
      }
    }
  }, [router])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    setResult(null)
    setShowReadMore(false)
    try {
      const res = await fetch('/api/admin/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Generation failed')
      setResult(data.blog)
      setManageSuccess('')
      setScheduleMode(false)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleManageBlog = async (action: 'post' | 'schedule' | 'delete') => {
    if (!result?.id) return
    setManageLoading(true)
    setError('')
    
    try {
      const res = await fetch('/api/admin/manage-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id: result.id, 
          action,
          publishedAt: scheduleDate || undefined
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to manage blog')
      
      if (action === 'delete') {
        setResult(null)
        setQuery('')
      } else if (action === 'post') {
        setManageSuccess('Blog successfully published to homepage!')
      } else if (action === 'schedule') {
        setManageSuccess(`Blog scheduled for ${new Date(scheduleDate).toLocaleString()}`)
        setScheduleMode(false)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setManageLoading(false)
    }
  }

  const handleDashboardAction = async (id: string, action: 'post' | 'unpublish' | 'delete' | 'schedule', date?: string) => {
    if (action === 'delete' && !window.confirm('Are you sure you want to delete this blog?')) return
    
    setDashLoading(true)
    try {
      const res = await fetch('/api/admin/manage-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action, publishedAt: date }),
      })
      if (!res.ok) throw new Error('Failed to update blog')
      await fetchAdminBlogs()
    } catch (err) {
      console.error(err)
      alert('Action failed.')
    } finally {
      setDashLoading(false)
    }
  }



  return (
    <>
      <Head>
        <title>Blog Generator – Admin</title>
        <meta name="robots" content="noindex, nofollow" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="admin-shell">
        {/* Mobile overlay backdrop */}
        {sidebarOpen && (
          <div
            className="sidebar-backdrop"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`admin-sidebar${sidebarOpen ? ' open' : ''}`}>
          <div>
            <div style={s.sideLogo}>
              <div style={s.logoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>Matt Admin</div>
                <div style={{ color: '#e0a72b', fontSize: '11px' }}>Blog Generator</div>
              </div>
              {/* Close button (mobile only) */}
              <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>✕</button>
            </div>
            <nav style={s.nav}>
              {[
                { label: 'Overview', href: '/admin/dashboard', icon: '▦' },
                { label: 'Blog Generator', href: '/admin/blog', icon: '✦', active: true },
              ].map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setSidebarOpen(false)} style={{
                  ...s.navItem,
                  background: item.active ? 'rgba(224,167,43,0.15)' : 'transparent',
                  color: item.active ? '#e0a72b' : '#aab4c4',
                  borderLeft: item.active ? '3px solid #e0a72b' : '3px solid transparent',
                }}>
                  <span>{item.icon}</span>{item.label}
                </Link>
              ))}
            </nav>
          </div>
          <button onClick={() => { sessionStorage.removeItem('admin_logged_in'); router.push('/admin') }} style={s.logoutBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
              <polyline points="16,17 21,12 16,7" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="21" y1="12" x2="9" y2="12" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Logout
          </button>
        </aside>

        {/* Main */}
        <main style={s.main} className="admin-main">
          {/* Mobile topbar */}
          <div className="mobile-topbar">
            <button className="hamburger" onClick={() => setSidebarOpen(true)}>
              <span /><span /><span />
            </button>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>AI Blog Generator</span>
            <div style={{ width: 36 }} />
          </div>

          <div style={{ ...s.topbar, paddingBottom: 0 }} className="admin-topbar">
            <div>
              <h1 style={s.pageTitle}>Blog Management ✦</h1>
              <p style={s.pageSub}>Generate new content or manage your existing publications</p>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <button 
                onClick={() => setActiveTab('generate')}
                style={{ ...s.tabBtn, borderBottom: activeTab === 'generate' ? '2px solid #e0a72b' : '2px solid transparent', color: activeTab === 'generate' ? '#e0a72b' : '#aab4c4' }}
              >
                Generate New
              </button>
              <button 
                onClick={() => setActiveTab('manage')}
                style={{ ...s.tabBtn, borderBottom: activeTab === 'manage' ? '2px solid #e0a72b' : '2px solid transparent', color: activeTab === 'manage' ? '#e0a72b' : '#aab4c4' }}
              >
                Manage Blogs
              </button>
            </div>
          </div>

          {activeTab === 'generate' && (
            <>
              {/* Search */}
              <form onSubmit={handleSearch} style={s.searchForm} className="admin-search-form">
            <div style={s.searchWrap} className="admin-search-wrap">
              <svg style={s.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#8b8fa8" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" stroke="#8b8fa8" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                id="blog-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Machine Learning in Healthcare, Climate Change Research..."
                style={s.searchInput}
                disabled={loading}
                autoComplete="off"
              />
            </div>
            <button type="submit" disabled={loading || !query.trim()} className="admin-search-btn" style={{
              ...s.searchBtn,
              opacity: loading || !query.trim() ? 0.6 : 1,
              cursor: loading || !query.trim() ? 'not-allowed' : 'pointer',
            }}>
              {loading ? <><span style={s.spinner} />Generating…</> : <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                Generate Blog
              </>}
            </button>
          </form>

          {/* Error */}
          {error && (
            <div style={s.errorBox}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#ff6b6b" strokeWidth="2" />
                <line x1="12" y1="8" x2="12" y2="12" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="16" x2="12.01" y2="16" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {error}
            </div>
          )}

          {/* Loading skeleton */}
          {loading && (
            <div style={s.skeletonWrap}>
              <div style={s.skeletonImg} />
              <div style={{ padding: '32px' }}>
                {[80, 50, 100, 90, 60].map((w, i) => (
                  <div key={i} style={{ ...s.skeletonLine, width: `${w}%`, marginBottom: i === 1 ? '24px' : '12px' }} />
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {result && !loading && (
            <article style={s.article}>
              {/* Featured image */}
              {result.imageUrl && (
                <div style={s.imgWrap}>
                  <img src={result.imageUrl} alt={result.title} style={s.featuredImg} />
                  <div style={s.imgOverlay}>
                    <span style={s.categoryTag}>{result.category}</span>
                  </div>
                </div>
              )}

              <div style={s.articleBody} className="admin-article-body">
                {/* Meta row */}
                <div style={s.metaRow}>
                  <span style={s.metaBadge}>{result.category}</span>
                  <span style={s.metaText}>{result.readTime}</span>
                  <span style={s.metaText}>·</span>
                  <span style={s.metaText}>Generated {new Date(result.generatedAt).toLocaleDateString()}</span>
                </div>

                {/* Tags */}
                {result.tags && result.tags.length > 0 && (
                  <div style={s.tagsRow}>
                    {result.tags.map((tag: any, i: number) => <span key={i} style={s.tag}>#{tag}</span>)}
                  </div>
                )}

                <h2 style={s.articleTitle} className="admin-article-title">{result.title}</h2>
                <p style={s.articleSubtitle} className="admin-article-subtitle">{result.subtitle}</p>
                <p style={s.bodyText}>{result.introduction}</p>

                {/* Statistics */}
                {result.statistics && result.statistics.length > 0 && (
                  <div style={s.statsGrid} className="admin-stats-grid">
                    {result.statistics.map((stat: any, i: number) => (
                      <div key={i} style={s.statCard}>
                        <div style={s.statValue}>{stat.value}</div>
                        <div style={s.statLabel}>{stat.label}</div>
                        <div style={s.statSource}>{stat.source}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Overview */}
                {result.overview && (
                  <div style={s.section}>
                    <h3 style={s.sectionHeading}>{result.overview.heading}</h3>
                    {result.overview.content.split('\n').filter(Boolean).map((p, i) => (
                      <p key={i} style={s.bodyText}>{p}</p>
                    ))}
                  </div>
                )}

                {/* Key Takeaways box */}
                {result.keyTakeaways && result.keyTakeaways.length > 0 && (
                  <div style={s.takeawayBox}>
                    <div style={s.takeawayTitle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#02428d" />
                      </svg>
                      Key Takeaways
                    </div>
                    <ul style={s.takeawayList}>
                      {result.keyTakeaways.map((t, i) => (
                        <li key={i} style={s.takeawayItem}>
                          <span style={s.takeawayDot} />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Main Sections */}
                {result.sections?.map((sec, i) => (
                  <div key={i} style={s.section}>
                    <h3 style={s.sectionHeading}>{sec.heading}</h3>
                    {sec.content.split('\n').filter(Boolean).map((para, j) => (
                      <p key={j} style={s.bodyText}>{para}</p>
                    ))}
                  </div>
                ))}

                {/* Key Points */}
                {result.keyPoints && result.keyPoints.length > 0 && (
                  <div style={s.blockSection}>
                    <h3 style={s.blockHeading}>
                      <span style={s.blockHeadingIcon}>🎯</span> Key Points
                    </h3>
                    <div style={s.cardGrid} className="admin-card-grid">
                      {result.keyPoints.map((kp, i) => (
                        <div key={i} style={s.keyPointCard}>
                          <div style={s.keyPointTitle}>{kp.point}</div>
                          <div style={s.keyPointDesc}>{kp.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges */}
                {result.challenges && result.challenges.length > 0 && (
                  <div style={s.blockSection}>
                    <h3 style={s.blockHeading}>
                      <span style={s.blockHeadingIcon}>⚠️</span> Challenges
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                      {result.challenges.map((ch, i) => (
                        <div key={i} style={s.challengeCard}>
                          <div style={s.challengeTitle}>{ch.title}</div>
                          <div style={s.challengeDesc}>{ch.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Best Practices */}
                {result.bestPractices && result.bestPractices.length > 0 && (
                  <div style={s.blockSection}>
                    <h3 style={s.blockHeading}>
                      <span style={s.blockHeadingIcon}>✅</span> Best Practices
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                      {result.bestPractices.map((bp, i) => (
                        <div key={i} style={s.bestPracticeCard}>
                          <div style={s.bpNumber}>{i + 1}</div>
                          <div>
                            <div style={s.challengeTitle}>{bp.title}</div>
                            <div style={s.challengeDesc}>{bp.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conclusion */}
                {result.conclusion && (
                  <div style={s.conclusionBox}>
                    <h3 style={s.sectionHeading}>Conclusion</h3>
                    <p style={s.bodyText}>{result.conclusion}</p>
                  </div>
                )}

                {/* Footer */}
                <div style={s.articleFooter} className="admin-article-footer">
                  <span style={s.queryTag}>🔍 Query: "{result.query}"</span>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' as const }} className="admin-footer-btns">
                    {!showReadMore && (result.expertInsight || (result.didYouKnow && result.didYouKnow.length > 0)) && (
                      <button
                        onClick={() => setShowReadMore(true)}
                        style={s.readMoreBtn}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="#02428d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Read More Details
                      </button>
                    )}
                    <button
                      onClick={() => { setResult(null); setShowReadMore(false); setQuery(''); setManageSuccess(''); setScheduleMode(false); }}
                      style={s.newSearchBtn}
                    >
                      + New Search
                    </button>
                  </div>
                </div>

                {/* ── Management Action Bar ── */}
                {result.id && !manageSuccess && (
                  <div style={s.manageBar}>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <button onClick={() => handleManageBlog('post')} disabled={manageLoading} style={{ ...s.manageBtn, background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Post Now
                      </button>
                      <button onClick={() => setScheduleMode(!scheduleMode)} disabled={manageLoading} style={{ ...s.manageBtn, background: 'linear-gradient(135deg, #e0a72b, #c8911a)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#fff" strokeWidth="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="#fff" strokeWidth="2"/><line x1="8" y1="2" x2="8" y2="6" stroke="#fff" strokeWidth="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="#fff" strokeWidth="2"/></svg>
                        Schedule
                      </button>
                      <button onClick={() => { if(window.confirm('Are you sure you want to delete this drafted blog?')) handleManageBlog('delete') }} disabled={manageLoading} style={{ ...s.manageBtn, background: 'rgba(255,107,107,0.1)', color: '#ff6b6b', border: '1px solid rgba(255,107,107,0.2)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round"/></svg>
                        Delete Draft
                      </button>
                    </div>
                    {scheduleMode && (
                      <div style={s.premiumSchedulePanel}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                           <span style={{ fontSize: '20px' }}>🗓️</span>
                           <span style={{ color: '#fff', fontWeight: 600, fontSize: '15px' }}>Schedule Publication</span>
                        </div>
                        <label style={{ fontSize: '13px', color: '#aab4c4', display: 'block', marginBottom: '8px' }}>Select the exact date and time this post should go live:</label>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'stretch' }}>
                          <input 
                            type="datetime-local" 
                            value={scheduleDate} 
                            onChange={(e) => setScheduleDate(e.target.value)} 
                            style={s.premiumDateInput} 
                          />
                          <button onClick={() => handleManageBlog('schedule')} disabled={!scheduleDate || manageLoading} style={{...s.premiumConfirmBtn, opacity: (!scheduleDate || manageLoading) ? 0.6 : 1 }}>
                            Confirm Schedule
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {manageSuccess && (
                  <div style={s.successBox}>
                    <span style={{ fontSize: '18px' }}>✨</span>
                    {manageSuccess}
                  </div>
                )}


              </div>
            </article>
          )}

          {/* ── Read More Expanded Section ── */}
          {showReadMore && result && !loading && (
            <div style={s.readMoreSection}>
              {/* Expert Insight */}
              {result.expertInsight && (
                <div style={s.rmPanel}>
                  <div style={s.rmPanelHeader}>
                    <span style={s.rmIcon}>💡</span>
                    <span style={s.rmPanelTitle}>Expert Insight</span>
                  </div>
                  <p style={s.rmBody}>{result.expertInsight}</p>
                </div>
              )}

              {/* Did You Know */}
              {result.didYouKnow && result.didYouKnow.length > 0 && (
                <div style={s.rmPanel}>
                  <div style={s.rmPanelHeader}>
                    <span style={s.rmIcon}>📊</span>
                    <span style={s.rmPanelTitle}>Did You Know?</span>
                  </div>
                  <ul style={s.rmList}>
                    {result.didYouKnow.map((fact, i) => (
                      <li key={i} style={s.rmListItem}>
                        <span style={s.rmBullet}>{i + 1}</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Case Study */}
              {result.caseStudy && (
                <div style={{ ...s.rmPanel, ...s.caseStudyPanel }}>
                  <div style={s.rmPanelHeader}>
                    <span style={s.rmIcon}>🔬</span>
                    <span style={s.rmPanelTitle}>Case Study: {result.caseStudy.title}</span>
                  </div>
                  <p style={s.rmBody}>{result.caseStudy.body}</p>
                </div>
              )}

              {/* FAQ */}
              {result.faq && result.faq.length > 0 && (
                <div style={s.rmPanel}>
                  <div style={s.rmPanelHeader}>
                    <span style={s.rmIcon}>❓</span>
                    <span style={s.rmPanelTitle}>Frequently Asked Questions</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
                    {result.faq.map((item, i) => (
                      <div key={i} style={s.faqItem}>
                        <div style={s.faqQ}>Q: {item.q}</div>
                        <div style={s.faqA}>{item.a}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Further Reading */}
              {result.furtherReading && result.furtherReading.length > 0 && (
                <div style={s.rmPanel}>
                  <div style={s.rmPanelHeader}>
                    <span style={s.rmIcon}>📚</span>
                    <span style={s.rmPanelTitle}>Further Reading</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                    {result.furtherReading.map((item, i) => (
                      <div key={i} style={s.furtherItem}>
                        <div style={s.furtherTitle}>{item.title}</div>
                        <div style={s.furtherDesc}>{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button onClick={() => setShowReadMore(false)} style={s.collapseBtnWrap}>
                ▲ Collapse
              </button>
            </div>
          )}

          {/* Empty state */}
          {!result && !loading && !error && (
            <div style={s.emptyState}>
              <div style={s.emptyIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#02428d" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <p style={s.emptyTitle}>Ready to generate</p>
              <p style={s.emptySub}>Type any topic above and click "Generate Blog" to create AI-powered content with a featured image</p>
              <div style={s.suggestionRow}>
                {['Research Methodology', 'PhD Writing Tips', 'Academic Publishing', 'Data Analysis'].map((sug) => (
                  <button key={sug} onClick={() => setQuery(sug)} style={s.suggestionChip}>{sug}</button>
                ))}
              </div>
            </div>
          )}
          </>
          )}

          {activeTab === 'manage' && (
            <div style={{ padding: '0 32px 32px' }}>
              {dashLoading && adminBlogs.length === 0 ? (
                <div style={{ color: '#aab4c4' }}>Loading blogs...</div>
              ) : adminBlogs.length === 0 ? (
                <div style={{ color: '#aab4c4', textAlign: 'center', padding: '40px' }}>No blogs found. Go generate some!</div>
              ) : (
                <div style={{ display: 'grid', gap: '16px' }}>
                  {adminBlogs.map((b) => (
                    <div key={b.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                            <span style={{ fontSize: '12px', padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>{b.category}</span>
                            <span style={{ 
                              fontSize: '12px', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold',
                              background: (b.status || 'published') === 'published' ? 'rgba(16, 185, 129, 0.2)' : b.status === 'scheduled' ? 'rgba(224, 167, 43, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                              color: (b.status || 'published') === 'published' ? '#10b981' : b.status === 'scheduled' ? '#e0a72b' : '#aab4c4'
                            }}>
                              {(b.status || 'published').toUpperCase()}
                            </span>
                          </div>
                          <h3 style={{ color: '#fff', fontSize: '18px', margin: '0 0 4px 0' }}>{b.title}</h3>
                          <div style={{ color: '#8b8fa8', fontSize: '13px' }}>
                            Generated: {new Date(b.generatedAt).toLocaleDateString()} 
                            {b.status === 'scheduled' && b.publishedAt && ` • Scheduled for: ${new Date(b.publishedAt).toLocaleString()}`}
                            {(b.status || 'published') === 'published' && b.publishedAt && ` • Published: ${new Date(b.publishedAt).toLocaleString()}`}
                          </div>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        {(b.status || 'published') === 'draft' && (
                          <>
                            <button onClick={() => handleDashboardAction(b.id, 'post')} disabled={dashLoading} style={{...s.dashBtn, background: '#10b981'}}>Post Now</button>
                            <button onClick={() => {
                              setScheduleModalBlogId(b.id)
                              setScheduleModalDate('')
                              setScheduleModalOpen(true)
                            }} disabled={dashLoading} style={{...s.dashBtn, background: '#e0a72b'}}>Schedule</button>
                          </>
                        )}
                        {b.status === 'scheduled' && (
                          <>
                            <button onClick={() => handleDashboardAction(b.id, 'post')} disabled={dashLoading} style={{...s.dashBtn, background: '#10b981'}}>Post Now (Override)</button>
                            <button onClick={() => handleDashboardAction(b.id, 'unpublish')} disabled={dashLoading} style={{...s.dashBtn, background: 'rgba(255,255,255,0.1)'}}>Revert to Draft</button>
                          </>
                        )}
                        {(b.status || 'published') === 'published' && (
                          <button onClick={() => handleDashboardAction(b.id, 'unpublish')} disabled={dashLoading} style={{...s.dashBtn, background: 'rgba(255,255,255,0.1)'}}>Unpublish</button>
                        )}
                        <a href={`/admin/preview/${b.id}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                          <button disabled={dashLoading} style={{...s.dashBtn, background: 'rgba(2, 66, 141, 0.8)', border: '1px solid #02428d'}}>View Preview</button>
                        </a>
                        <button onClick={() => handleDashboardAction(b.id, 'delete')} disabled={dashLoading} style={{...s.dashBtn, background: 'transparent', border: '1px solid #ff6b6b', color: '#ff6b6b'}}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Schedule Modal */}
          {scheduleModalOpen && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', animation: 'rmFadeIn 0.2s ease' }}>
              <div style={{ width: '400px', maxWidth: '90%', background: '#011e3a', border: '1px solid rgba(224,167,43,0.3)', borderRadius: '16px', padding: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '24px' }}>⏰</span>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '18px' }}>Schedule Post</span>
                </div>
                <p style={{ color: '#aab4c4', fontSize: '14px', marginBottom: '20px', lineHeight: 1.5 }}>
                  Choose when this blog should automatically be published to the homepage.
                </p>
                <input 
                  type="datetime-local" 
                  value={scheduleModalDate} 
                  onChange={(e) => setScheduleModalDate(e.target.value)} 
                  style={{ ...s.premiumDateInput, width: '100%', marginBottom: '20px' }} 
                />
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <button 
                    onClick={() => { setScheduleModalOpen(false); setScheduleModalDate(''); }} 
                    style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '10px', color: '#fff', cursor: 'pointer', fontWeight: 600 }}
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => {
                      if(scheduleModalDate) {
                        handleDashboardAction(scheduleModalBlogId, 'schedule', scheduleModalDate)
                        setScheduleModalOpen(false)
                        setScheduleModalDate('')
                      }
                    }}
                    disabled={!scheduleModalDate || dashLoading}
                    style={{ ...s.premiumConfirmBtn, padding: '10px 24px', opacity: (!scheduleModalDate || dashLoading) ? 0.6 : 1 }}
                  >
                    Schedule Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes rmFadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:0.8} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideIn { from{transform:translateX(-100%)} to{transform:translateX(0)} }

        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #011e3a; }
        input:focus { outline: none !important; border-color: #e0a72b !important; box-shadow: 0 0 0 3px rgba(224,167,43,0.18) !important; }

        /* Shell layout */
        .admin-shell { display: flex; min-height: 100vh; background: #011e3a; font-family: 'Roboto', sans-serif; color: #fff; }

        /* Sidebar */
        .admin-sidebar {
          width: 220px; min-width: 220px;
          background: rgba(1,30,58,0.95);
          border-right: 1px solid rgba(255,255,255,0.1);
          display: flex; flex-direction: column; justify-content: space-between;
          position: sticky; top: 0; height: 100vh;
          transition: transform 0.25s ease;
          z-index: 100;
        }

        /* Mobile sidebar close button — hidden on desktop */
        .sidebar-close { display: none; background: none; border: none; color: #8b8fa8; font-size: 18px; cursor: pointer; padding: 0; margin-left: auto; }

        /* Mobile topbar — hidden on desktop */
        .mobile-topbar { display: none; align-items: center; justify-content: space-between; padding: 14px 16px; background: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.07); position: sticky; top: 0; z-index: 50; }

        /* Hamburger */
        .hamburger { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; gap: 5px; padding: 4px; }
        .hamburger span { display: block; width: 22px; height: 2px; background: #fff; border-radius: 2px; transition: all 0.2s; }

        /* Backdrop */
        .sidebar-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 99; backdrop-filter: blur(2px); }

        /* ── Tablet (≤ 900px) ── */
        @media (max-width: 900px) {
          .admin-sidebar {
            position: fixed; top: 0; left: 0; height: 100vh;
            transform: translateX(-100%);
            box-shadow: 4px 0 30px rgba(0,0,0,0.5);
          }
          .admin-sidebar.open { transform: translateX(0); animation: slideIn 0.25s ease; }
          .sidebar-close { display: block; }
          .mobile-topbar { display: flex; }
        }

        /* ── Mobile (≤ 640px) ── */
        @media (max-width: 640px) {
          .admin-search-form { flex-direction: column !important; }
          .admin-search-wrap { min-width: unset !important; }
          .admin-search-btn { width: 100%; justify-content: center; }
          .admin-article-body { padding: 20px 16px !important; }
          .admin-article-title { font-size: 22px !important; }
          .admin-article-subtitle { font-size: 14px !important; }
          .admin-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .admin-card-grid { grid-template-columns: 1fr !important; }
          .admin-article-footer { flex-direction: column !important; align-items: flex-start !important; }
          .admin-footer-btns { width: 100%; justify-content: flex-start !important; }
          .admin-rm-panel { padding: 16px !important; }
          .admin-main { padding: 16px !important; }
          .admin-topbar { display: none; }
        }

        /* ── Small Mobile (≤ 380px) ── */
        @media (max-width: 380px) {
          .admin-stats-grid { grid-template-columns: 1fr !important; }
          .admin-article-title { font-size: 19px !important; }
        }
      ` }} />
    </>
  )
}

const s: Record<string, React.CSSProperties> = {
  shell: { display: 'flex', minHeight: '100vh', background: '#011e3a', fontFamily: "'Roboto',sans-serif", color: '#fff' },
  sidebar: { width: '220px', minWidth: '220px', background: 'rgba(255,255,255,0.03)', borderRight: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'sticky', top: 0, height: '100vh' },
  sideLogo: { display: 'flex', alignItems: 'center', gap: '12px', padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)' },
  logoIcon: { width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #02428d, #518dbb)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(224,167,43,0.3)' },
  nav: { display: 'flex', flexDirection: 'column', gap: '2px', padding: '16px 8px' },
  navItem: { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'all 0.15s' },
  logoutBtn: { display: 'flex', alignItems: 'center', gap: '10px', margin: '16px', padding: '10px 16px', background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.2)', borderRadius: '10px', color: '#ff8a8a', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Roboto',sans-serif" },
  main: { flex: 1, padding: '32px 36px', overflowY: 'auto' },
  topbar: { marginBottom: '28px' },
  pageTitle: { margin: 0, fontSize: '26px', fontWeight: 800, letterSpacing: '-0.5px' },
  pageSub: { margin: '6px 0 0', color: '#8b8fa8', fontSize: '14px' },
  searchForm: { display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' },
  searchWrap: { flex: 1, position: 'relative', minWidth: '280px' },
  searchIcon: { position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' },
  searchInput: { width: '100%', padding: '14px 14px 14px 44px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', color: '#fff', fontSize: '14px', fontFamily: "'Roboto',sans-serif", boxSizing: 'border-box' },
  searchBtn: { display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', background: 'linear-gradient(135deg, #e0a72b, #c8911a)', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: "'Roboto',sans-serif", whiteSpace: 'nowrap', boxShadow: '0 4px 20px rgba(224,167,43,0.3)', transition: 'all 0.2s' },
  spinner: { width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' },
  errorBox: { display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.25)', borderRadius: '12px', padding: '14px 18px', color: '#ff8a8a', fontSize: '14px', marginBottom: '24px' },
  // Skeleton
  skeletonWrap: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', animation: 'fadeIn 0.3s ease' },
  skeletonImg: { width: '100%', height: '300px', background: 'linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 75%)', backgroundSize: '200% 100%', animation: 'pulse 1.5s ease-in-out infinite' },
  skeletonLine: { height: '16px', background: 'rgba(255,255,255,0.07)', borderRadius: '8px', animation: 'pulse 1.5s ease-in-out infinite' },
  // Article
  article: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', animation: 'fadeIn 0.5s ease' },
  imgWrap: { position: 'relative', width: '100%', maxHeight: '420px', overflow: 'hidden' },
  featuredImg: { width: '100%', height: '420px', objectFit: 'cover', display: 'block' },
  imgOverlay: { position: 'absolute', bottom: '20px', left: '24px' },
  categoryTag: { background: 'rgba(2,66,141,0.85)', backdropFilter: 'blur(8px)', color: '#fff', padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' },
  articleBody: { padding: '36px 40px' },
  metaRow: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' },
  metaBadge: { background: 'rgba(2,66,141,0.15)', color: '#e0a72b', borderRadius: '20px', padding: '3px 12px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' },
  metaText: { color: '#8b8fa8', fontSize: '13px' },
  articleTitle: { margin: '0 0 10px', fontSize: '30px', fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.5px', color: '#fff' },
  articleSubtitle: { margin: '0 0 24px', color: '#a0a3b8', fontSize: '16px', lineHeight: 1.6, fontStyle: 'italic' },
  bodyText: { color: '#c4c6d8', fontSize: '15px', lineHeight: 1.8, margin: '0 0 16px' },
  takeawayBox: { background: 'rgba(2,66,141,0.08)', border: '1px solid rgba(2,66,141,0.2)', borderRadius: '14px', padding: '20px 24px', margin: '24px 0' },
  takeawayTitle: { display: 'flex', alignItems: 'center', gap: '8px', color: '#e0a72b', fontWeight: 700, fontSize: '14px', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' },
  takeawayList: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' },
  takeawayItem: { display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#d1d5db', fontSize: '14px', lineHeight: 1.6 },
  takeawayDot: { width: '6px', height: '6px', borderRadius: '50%', background: '#02428d', flexShrink: 0, marginTop: '7px' },
  section: { marginBottom: '28px' },
  sectionHeading: { margin: '0 0 12px', fontSize: '20px', fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' },
  conclusionBox: { borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', marginTop: '8px' },
  articleFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', gap: '12px' },
  queryTag: { color: '#5a5d75', fontSize: '13px', fontStyle: 'italic' },
  newSearchBtn: { padding: '9px 20px', background: 'linear-gradient(135deg, #e0a72b, #c8911a)', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Roboto',sans-serif" },
  // Tags
  tagsRow: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' },
  tag: { padding: '3px 10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', color: '#8b8fa8', fontSize: '12px', fontWeight: 500 },
  // Statistics grid
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', margin: '24px 0' },
  statCard: { background: 'rgba(2,66,141,0.08)', border: '1px solid rgba(2,66,141,0.2)', borderRadius: '12px', padding: '16px', textAlign: 'center' },
  statValue: { fontSize: '26px', fontWeight: 800, color: '#e0a72b', letterSpacing: '-0.5px', marginBottom: '6px' },
  statLabel: { fontSize: '12px', color: '#c4c6d8', lineHeight: 1.4, fontWeight: 500 },
  statSource: { fontSize: '10px', color: '#5a5d75', marginTop: '6px', fontStyle: 'italic' },
  // Block sections (key points, challenges, best practices)
  blockSection: { margin: '32px 0', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '24px' },
  blockHeading: { display: 'flex', alignItems: 'center', gap: '10px', margin: '0 0 20px', fontSize: '18px', fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' },
  blockHeadingIcon: { fontSize: '20px' },
  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' },
  keyPointCard: { background: 'rgba(2,66,141,0.08)', border: '1px solid rgba(2,66,141,0.18)', borderRadius: '12px', padding: '16px' },
  keyPointTitle: { fontSize: '14px', fontWeight: 700, color: '#e0a72b', marginBottom: '8px' },
  keyPointDesc: { fontSize: '13px', color: '#c4c6d8', lineHeight: 1.6 },
  challengeCard: { background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.18)', borderRadius: '12px', padding: '16px', borderLeft: '3px solid #f59e0b' },
  challengeTitle: { fontSize: '14px', fontWeight: 700, color: '#fcd34d', marginBottom: '6px' },
  challengeDesc: { fontSize: '13px', color: '#c4c6d8', lineHeight: 1.6 },
  bestPracticeCard: { display: 'flex', gap: '14px', alignItems: 'flex-start', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '12px', padding: '16px' },
  bpNumber: { minWidth: '28px', height: '28px', borderRadius: '8px', background: 'rgba(34,197,94,0.2)', color: '#4ade80', fontSize: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  readMoreBtn: { display: 'flex', alignItems: 'center', gap: '7px', padding: '9px 20px', background: 'rgba(2,66,141,0.12)', border: '1px solid rgba(2,66,141,0.4)', borderRadius: '8px', color: '#e0a72b', fontSize: '13px', fontWeight: 700, fontFamily: "'Roboto',sans-serif", transition: 'all 0.2s' },
  spinnerSm: { width: '13px', height: '13px', border: '2px solid rgba(224,167,43,0.3)', borderTop: '2px solid #e0a72b', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' },
  errorBoxInline: { marginTop: '14px', background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.25)', borderRadius: '10px', padding: '12px 16px', color: '#ff8a8a', fontSize: '13px' },
  // Read More section
  readMoreSection: { marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px', animation: 'rmFadeIn 0.5s ease' },
  rmPanel: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px 28px' },
  caseStudyPanel: { background: 'rgba(2,66,141,0.08)', border: '1px solid rgba(2,66,141,0.22)' },
  rmPanelHeader: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' },
  rmIcon: { fontSize: '20px', lineHeight: 1 },
  rmPanelTitle: { fontSize: '16px', fontWeight: 700, color: '#fff', letterSpacing: '-0.2px' },
  rmBody: { color: '#c4c6d8', fontSize: '15px', lineHeight: 1.8, margin: 0 },
  rmList: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' },
  rmListItem: { display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#c4c6d8', fontSize: '14px', lineHeight: 1.7 },
  rmBullet: { minWidth: '24px', height: '24px', borderRadius: '6px', background: 'rgba(2,66,141,0.2)', color: '#e0a72b', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' },
  faqItem: { background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '16px' },
  faqQ: { color: '#e0a72b', fontSize: '14px', fontWeight: 700, marginBottom: '8px' },
  faqA: { color: '#c4c6d8', fontSize: '14px', lineHeight: 1.7 },
  furtherItem: { background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '14px 16px', borderLeft: '3px solid #e0a72b' },
  furtherTitle: { color: '#fff', fontSize: '14px', fontWeight: 700, marginBottom: '5px' },
  furtherDesc: { color: '#8b8fa8', fontSize: '13px', lineHeight: 1.6 },
  collapseBtnWrap: { alignSelf: 'center', padding: '8px 24px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', color: '#8b8fa8', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Roboto',sans-serif", transition: 'all 0.15s' },
  // Empty state
  emptyState: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', textAlign: 'center' },
  emptyIcon: { width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(2,66,141,0.1)', border: '1px solid rgba(2,66,141,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' },
  emptyTitle: { margin: '0 0 8px', fontSize: '20px', fontWeight: 700, color: '#fff' },
  emptySub: { margin: '0 0 28px', color: '#8b8fa8', fontSize: '14px', maxWidth: '400px', lineHeight: 1.7 },
  suggestionRow: { display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' },
  suggestionChip: { padding: '8px 18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', color: '#a0a3b8', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Roboto',sans-serif", transition: 'all 0.15s' },
  // Management actions
  manageBar: { marginTop: '20px', padding: '20px', background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '16px' },
  manageBtn: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Roboto',sans-serif" },
  premiumSchedulePanel: { marginTop: '16px', padding: '24px', background: 'linear-gradient(145deg, rgba(2,66,141,0.15), rgba(0,0,0,0.2))', border: '1px solid rgba(224,167,43,0.2)', borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', animation: 'rmFadeIn 0.3s ease' },
  premiumDateInput: { padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', color: '#fff', fontFamily: "'Roboto',sans-serif", colorScheme: 'dark', flex: 1, fontSize: '15px', outline: 'none', transition: 'border-color 0.2s' },
  premiumConfirmBtn: { padding: '0 24px', background: 'linear-gradient(135deg, #e0a72b, #c8911a)', border: 'none', borderRadius: '10px', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '14px', boxShadow: '0 4px 15px rgba(224,167,43,0.3)', transition: 'transform 0.1s, opacity 0.2s' },
  successBox: { marginTop: '20px', padding: '16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 600 },
  tabBtn: { padding: '10px 16px', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '15px', transition: 'all 0.2s' },
  dashBtn: { padding: '6px 12px', border: 'none', borderRadius: '6px', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }
}
