import { useLang } from '../contexts/LangContext'

const projects = [
  {
    titleKey: 'bigdata',
    title: '大数据智能管理平台',
    titleEn: 'Big Data Analytics Platform',
    desc: '首屏加载从 60s 降至 3s，基于 Canvas API 封装虚拟滚动组件实现百万级数据毫秒级渲染，荣获部门级创新二等奖。',
    descEn: 'Reduced first-screen load from 60s to 3s (20×). Built a Canvas-based virtual scroll component for million-row data rendering at 60fps. Won department innovation award.',
    tags: ['Vue 2', 'Webpack', 'ECharts', 'Canvas', 'Vuex'],
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    titleKey: 'crm',
    title: 'HOSHINE CRM 营销业务平台',
    titleEn: 'HOSHINE CRM Platform',
    desc: '主导设计 JSON-Schema 驱动的动态表单引擎，代码复用率超 60%，新页面开发效率提升 40%，首屏资源体积减少 42%。',
    descEn: 'Designed a JSON-Schema-driven dynamic form engine. Code reuse rate 60%+, new page dev time cut by 40%, first-screen bundle size reduced by 42%.',
    tags: ['Vue 3', 'Vite', 'TypeScript', 'Pinia', 'Unocss', 'Ant Design'],
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    titleKey: 'cli',
    title: 'HOSHINE 前端 CLI 脚手架',
    titleEn: 'HOSHINE Frontend CLI',
    desc: '企业级前端 CLI 工具 + Monorepo 架构，统一 3 个核心业务线工程规范，新项目搭建成本接近为零，Code Review 格式争论减少 90%。',
    descEn: 'Enterprise CLI + Monorepo architecture unifying 3 business lines. Near-zero project setup cost, 90% reduction in code style disputes during reviews.',
    tags: ['Node.js', 'pnpm', 'ESLint', 'Husky', 'Commitlint'],
    link: '#',
    repo: '#',
    featured: false,
  },
  {
    titleKey: 'hooks',
    title: 'HoshineHooks 业务 Hook 库',
    titleEn: 'HoshineHooks Library',
    desc: '基于 Vue 3 的高复用 Hook 库，20+ 通用 Hooks，Vitest 单元测试覆盖率 90%+，消除核心系统间 30% 重复逻辑代码。',
    descEn: 'Vue 3 business hook library with 20+ hooks, 90%+ test coverage via Vitest, VitePress docs site. Eliminated 30% duplicate logic across core systems.',
    tags: ['Vue 3', 'TypeScript', 'Rollup', 'Vitest', 'VitePress'],
    link: '#',
    repo: '#',
    featured: false,
  },
]

export default function Projects() {
  const { t, lang } = useLang()

  return (
    <section id="projects" className="py-28" style={{ background: 'color-mix(in srgb, var(--surface) 50%, transparent)' }}>
      <div className="max-w-5xl mx-auto px-8">
        <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
          {t.projects.subtitle}
        </p>
        <h2 className="text-4xl font-bold mb-16" style={{ color: 'var(--text)' }}>
          {t.projects.title} <span className="gradient-text">{t.projects.highlight}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map(project => (
            <div
              key={project.titleKey}
              className="group relative p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--surface)',
                borderColor: project.featured ? 'rgba(124,58,237,0.3)' : 'var(--border)',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.6)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = project.featured ? 'rgba(124,58,237,0.3)' : 'var(--border)')}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                  {t.projects.featured}
                </span>
              )}

              <h3 className="text-lg font-semibold mb-2 pr-16" style={{ color: 'var(--text)' }}>
                {lang === 'zh' ? project.title : project.titleEn}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                {lang === 'zh' ? project.desc : project.descEn}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2 py-0.5 rounded border"
                    style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-dim)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4" style={{ display: 'none' }}>
                <a href={project.link} className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: 'var(--text-dim)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-dim)')}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t.projects.live}
                </a>
                <a href={project.repo} className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: 'var(--text-dim)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-dim)')}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  {t.projects.source}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
