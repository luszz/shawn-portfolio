import { useLang } from '../contexts/LangContext'


export default function Hero() {
  const { t } = useLang()

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* orbs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-0 left-[-80px] w-[350px] h-[350px] rounded-full pointer-events-none animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.13), transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8 pt-20">
        {/* badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs mb-8" style={{ borderColor: 'rgba(124,58,237,0.4)', color: 'var(--text-dim)' }}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
          {t.hero.badge}
        </div>

        {/* title */}
        <h1
          className="animate-fade-up font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', animationDelay: '0.1s', color: 'var(--text)' }}
        >
          {t.hero.greeting} <span className="gradient-text">{t.hero.name}</span>
          <br />
          <span style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--text-dim)', fontWeight: 600 }}>
            {t.hero.role}
          </span>
        </h1>

        {/* desc */}
        <p
          className="animate-fade-up text-lg leading-relaxed max-w-xl mb-10"
          style={{ animationDelay: '0.2s', color: 'var(--text-dim)' }}
        >
          {t.hero.desc}
        </p>

        {/* actions */}
        <div className="animate-fade-up flex flex-wrap gap-4 mb-12" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="px-7 py-3 rounded-lg text-white text-sm font-medium hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: 'var(--accent)', boxShadow: '0 0 0 0 transparent' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(124,58,237,0.4)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = '')}
          >
            {t.hero.cta_work}
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-lg border text-sm font-medium hover:-translate-y-0.5 transition-all duration-200"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
          >
            {t.hero.cta_contact}
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up" style={{ animationDelay: '1s' }}>
        <div className="w-px h-14 mx-auto" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
      </div>
    </section>
  )
}
