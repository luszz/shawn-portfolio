import { useLang } from '../contexts/LangContext'

const skillGroups = [
  {
    categoryKey: 'frontend' as const,
    highlight: false,
    skills: [
      { name: 'Vue 3 / Vue 2', icon: '💚', desc: '' },
      { name: 'TypeScript', icon: '🔷', desc: '' },
      { name: 'React', icon: '⚛️', desc: '' },
      { name: 'Unocss / Tailwind', icon: '🎨', desc: '' },
      { name: 'ECharts', icon: '📊', desc: '' },
      { name: 'Canvas', icon: '🖼️', desc: '' },
    ],
  },
  {
    categoryKey: 'tooling' as const,
    highlight: false,
    skills: [
      { name: 'Vite', icon: '⚡', desc: '' },
      { name: 'Webpack', icon: '📦', desc: '' },
      { name: 'Pinia / Vuex', icon: '🍍', desc: '' },
      { name: 'Monorepo / pnpm', icon: '🗂️', desc: '' },
      { name: 'ESLint / Husky', icon: '🔍', desc: '' },
      { name: 'Rollup / Vitest', icon: '🧪', desc: '' },
    ],
  },
  {
    categoryKey: 'backend' as const,
    highlight: false,
    skills: [
      { name: 'Node.js', icon: '🟢', desc: '' },
      { name: 'NestJS', icon: '🪶', desc: '' },
      { name: 'Prisma', icon: '🔷', desc: '' },
      { name: 'MySQL', icon: '🐬', desc: '' },
      { name: 'CI/CD', icon: '🚀', desc: '' },
      { name: 'Docker', icon: '🐳', desc: '' },
    ],
  },
  {
    categoryKey: 'ai' as const,
    highlight: true,
    skills: [
      { name: 'Claude', icon: '✦', desc: 'Coding & writing assistant' },
      { name: 'Cursor', icon: '⌥', desc: 'AI-powered IDE' },
      { name: 'GitHub Copilot', icon: '🤖', desc: 'Code completion' },
      { name: 'Gemini', icon: '♊', desc: 'Research & ideation' },
    ],
  },
]

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="py-28">
      <div className="max-w-5xl mx-auto px-8">
        <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
          {t.skills.subtitle}
        </p>
        <h2 className="text-4xl font-bold mb-16" style={{ color: 'var(--text)' }}>
          {t.skills.title} <span className="gradient-text">{t.skills.highlight}</span>
        </h2>

        <div className="flex flex-col gap-10">
          {skillGroups.map(group => (
            <div key={group.categoryKey}>
              <div className="flex items-center gap-3 mb-4">
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                  {t.skills.categories[group.categoryKey]}
                </p>
                {group.highlight && (
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 rounded-full tracking-widest uppercase"
                    style={{ background: 'rgba(124,58,237,0.12)', color: 'var(--accent)', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    Daily use
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-default hover:-translate-y-0.5"
                    style={{
                      background: group.highlight ? 'rgba(124,58,237,0.05)' : 'var(--surface)',
                      borderColor: group.highlight ? 'rgba(124,58,237,0.2)' : 'var(--border)',
                      color: 'var(--text-dim)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'rgba(124,58,237,0.6)'
                      el.style.color = 'var(--text)'
                      el.style.boxShadow = '0 4px 16px rgba(124,58,237,0.15)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = group.highlight ? 'rgba(124,58,237,0.2)' : 'var(--border)'
                      el.style.color = 'var(--text-dim)'
                      el.style.boxShadow = ''
                    }}
                  >
                    <span className="text-base leading-none">{skill.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium leading-tight">{skill.name}</span>
                      {skill.desc && (
                        <span className="text-[11px] leading-tight mt-0.5" style={{ color: 'var(--text-muted)' }}>
                          {skill.desc}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
