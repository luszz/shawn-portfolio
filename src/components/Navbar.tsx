import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, t, toggleLang } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? { background: 'var(--navbar-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' } : {}}
    >
      <nav className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono text-sm font-semibold tracking-widest" style={{ color: 'var(--accent)' }}>
          &lt;刘爽 /&gt;
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm transition-colors duration-200 hover:opacity-100 opacity-60" style={{ color: 'var(--text)' }}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* lang toggle */}
          <button
            onClick={toggleLang}
            className="font-mono text-xs px-2.5 py-1.5 rounded-lg border transition-all duration-200 hover:opacity-80 cursor-pointer"
            style={{ borderColor: 'var(--border)', color: 'var(--text-dim)', background: 'var(--surface)' }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 hover:opacity-80 cursor-pointer"
            style={{ borderColor: 'var(--border)', color: 'var(--text-dim)', background: 'var(--surface)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
          >
            {t.nav.hire}
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: 'var(--text-dim)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-b px-8 py-4 flex flex-col gap-4" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="text-sm opacity-70 hover:opacity-100 transition-opacity" style={{ color: 'var(--text)' }} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button onClick={toggleLang} className="font-mono text-xs px-2.5 py-1.5 rounded-lg border" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}>
              {lang === 'en' ? '中文' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="w-8 h-8 rounded-lg border flex items-center justify-center" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
