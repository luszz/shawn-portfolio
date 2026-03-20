import { useLang } from '../contexts/LangContext'

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experience" className="py-28">
      <div className="max-w-5xl mx-auto px-8">
        <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
          {t.experience.subtitle}
        </p>
        <h2 className="text-4xl font-bold mb-16" style={{ color: 'var(--text)' }}>
          {t.experience.title} <span className="gradient-text">{t.experience.highlight}</span>
        </h2>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: 'var(--border)' }} />

          <div className="flex flex-col gap-12">
            {t.experience.jobs.map((job, i) => (
              <div key={i} className="pl-8 relative">
                {/* dot */}
                <div
                  className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--accent)' }}
                />

                <div
                  className="p-6 rounded-xl border transition-all duration-300 hover:border-[rgba(124,58,237,0.4)]"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                      {job.company}
                    </h3>
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-full shrink-0"
                      style={{ background: 'rgba(124,58,237,0.1)', color: 'var(--accent)', border: '1px solid rgba(124,58,237,0.2)' }}
                    >
                      {job.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>
                    {job.role}
                  </p>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-dim)' }}>
                    {job.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2 py-0.5 rounded border"
                        style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
