import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('admin_logged_in', 'true')
      router.push('/admin/blog')
    } else {
      setError('Invalid username or password.')
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>Admin Login – Matt Research Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #011e40; font-family: 'Roboto', sans-serif; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float1 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-28px) scale(1.04)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(20px)} }
        @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        #admin-username, #admin-password {
          width: 100%; padding: 13px 44px 13px 42px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px; color: #fff; font-size: 14px;
          font-family: 'Roboto', sans-serif; box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        #admin-username:focus, #admin-password:focus {
          outline: none; border-color: #e0a72b;
          box-shadow: 0 0 0 3px rgba(224,167,43,0.18);
        }
        #admin-submit:hover:not(:disabled) {
          background: linear-gradient(135deg,#e0a72b,#c8911a) !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(224,167,43,0.4) !important;
        }
        #admin-username::placeholder, #admin-password::placeholder { color: rgba(255,255,255,0.35); }
      ` }} />

      <div style={st.page}>
        <div style={st.orb1} />
        <div style={st.orb2} />
        <div style={st.orb3} />

        {/* Decorative top stripe */}
        <div style={st.topStripe} />

        <div style={st.card}>
          {/* Brand */}
          <div style={st.brandRow}>
            <div style={st.logoCircle}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px', letterSpacing: '0.3px' }}>Matt Research Solutions</div>
              <div style={{ color: '#e0a72b', fontSize: '11px', marginTop: '2px', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Admin Portal</div>
            </div>
          </div>

          {/* Gold divider */}
          <div style={st.divider} />

          <h1 style={st.title}>Welcome back</h1>
          <p style={st.subtitle}>Sign in to access the admin panel</p>

          <form onSubmit={handleLogin} style={st.form} autoComplete="off">
            {/* Username */}
            <div style={st.fieldGroup}>
              <label style={st.label} htmlFor="admin-username">Username</label>
              <div style={st.inputWrap}>
                <span style={st.inputIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <input id="admin-username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" required autoComplete="username" />
              </div>
            </div>

            {/* Password */}
            <div style={st.fieldGroup}>
              <label style={st.label} htmlFor="admin-password">Password</label>
              <div style={st.inputWrap}>
                <span style={st.inputIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <input id="admin-password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" required autoComplete="current-password" />
                <button type="button" onClick={() => setShowPassword(v => !v)} style={st.eyeBtn}>
                  {showPassword
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="1" y1="1" x2="23" y2="23" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/></svg>
                    : <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/></svg>
                  }
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={st.errorBox}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" stroke="#ff6b6b" strokeWidth="2"/>
                  <line x1="12" y1="8" x2="12" y2="13" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="16" r="1" fill="#ff6b6b"/>
                </svg>
                {error}
              </div>
            )}

            <button id="admin-submit" type="submit" disabled={loading} style={{ ...st.loginBtn, opacity: loading ? 0.75 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading && <span style={st.spinner} />}
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p style={st.note}>🔒 Secure admin access only</p>
        </div>
      </div>
    </>
  )
}

const st: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#011e40 0%,#02428d 55%,#01305e 100%)', fontFamily: "'Roboto',sans-serif", position: 'relative', overflow: 'hidden', padding: '20px' },
  topStripe: { position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg,#e0a72b,#f0c050,#e0a72b)', zIndex: 20 },
  orb1: { position: 'absolute', top: '-100px', left: '-100px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(2,66,141,0.6) 0%,transparent 70%)', animation: 'float1 9s ease-in-out infinite', pointerEvents: 'none' },
  orb2: { position: 'absolute', bottom: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(224,167,43,0.15) 0%,transparent 70%)', animation: 'float2 11s ease-in-out infinite', pointerEvents: 'none' },
  orb3: { position: 'absolute', top: '55%', left: '65%', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(81,141,187,0.2) 0%,transparent 70%)', animation: 'float3 7s ease-in-out infinite', pointerEvents: 'none' },
  card: { background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '44px 40px', width: '100%', maxWidth: '420px', boxShadow: '0 32px 80px rgba(0,0,0,0.5)', animation: 'fadeIn 0.5s ease forwards', position: 'relative', zIndex: 10 },
  brandRow: { display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' },
  logoCircle: { width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg,#02428d 0%,#518dbb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 16px rgba(2,66,141,0.5)', border: '1px solid rgba(224,167,43,0.35)' },
  divider: { height: '2px', background: 'linear-gradient(90deg,#e0a72b,transparent)', borderRadius: '2px', marginBottom: '28px', width: '60px' },
  title: { color: '#fff', fontSize: '26px', fontWeight: 800, margin: '0 0 6px', letterSpacing: '-0.3px' },
  subtitle: { color: 'rgba(255,255,255,0.55)', fontSize: '14px', margin: '0 0 28px' },
  form: { display: 'flex', flexDirection: 'column', gap: '18px' },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '7px' },
  label: { color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.2px' },
  inputWrap: { position: 'relative', display: 'flex', alignItems: 'center' },
  inputIcon: { position: 'absolute', left: '14px', display: 'flex', alignItems: 'center', pointerEvents: 'none' },
  eyeBtn: { position: 'absolute', right: '14px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 },
  errorBox: { display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,107,107,0.12)', border: '1px solid rgba(255,107,107,0.3)', borderRadius: '10px', padding: '12px 14px', color: '#ff8a8a', fontSize: '13px', fontWeight: 500 },
  loginBtn: { padding: '13px', background: 'linear-gradient(135deg,#e0a72b 0%,#c8911a 100%)', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'all 0.2s ease', boxShadow: '0 4px 20px rgba(224,167,43,0.3)', marginTop: '4px', fontFamily: "'Roboto',sans-serif", letterSpacing: '0.3px' },
  spinner: { width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block' },
  note: { textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '12px', marginTop: '22px' },
}
