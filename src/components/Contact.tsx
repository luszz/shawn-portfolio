import { useLang } from '../contexts/LangContext'

const links = [
  {
    key: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    key: 'luszz11@163.com',
    href: 'mailto:luszz11@163.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-8">
        <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
          {t.contact.subtitle}
        </p>
        <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
          {t.contact.title} <span className="gradient-text">{t.contact.highlight}</span>
        </h2>
        <p className="text-base mb-12 max-w-md" style={{ color: 'var(--text-muted)' }}>
          {t.contact.desc}
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            {links.map(({ key, href, icon }) => (
              <a
                key={key}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-dim)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.5)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-dim)' }}
              >
                {icon}
                <span className="text-sm font-medium">{key}</span>
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>

          <div className="p-8 rounded-xl border" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.04))', borderColor: 'rgba(124,58,237,0.2)' }}>
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text)' }}>{t.contact.cta_title}</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{t.contact.cta_desc}</p>

          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 mt-24 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
        <p className="text-center font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          {t.contact.footer} · © {new Date().getFullYear()} 刘爽
        </p>
      </div>
    </section>
  )
}
