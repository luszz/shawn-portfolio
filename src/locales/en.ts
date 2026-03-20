export const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    hire: 'Hire Me',
  },
  hero: {
    badge: 'Open to new opportunities',
    greeting: "Hi, I'm",
    name: 'Liu Shuang',
    role: 'Frontend Developer',
    desc: '5 years of experience building complex B-side systems. Specialized in Vue 3 ecosystem, frontend infrastructure, performance optimization, and data visualization.',
    cta_work: 'View My Work',
    cta_contact: 'Get In Touch',
    tech_label: 'Core stack:',
  },
  skills: {
    subtitle: 'What I work with',
    title: 'Skills &',
    highlight: 'Technologies',
    categories: {
      frontend: 'Frontend',
      tooling: 'Tooling & Build',
      backend: 'Backend & Other',
      ai: 'AI Tools',
    },
  },
  experience: {
    subtitle: 'Where I\'ve worked',
    title: 'Work',
    highlight: 'Experience',
    present: 'Present',
    jobs: [
      {
        company: 'Hesheng Silicon Industry Co., Ltd.',
        role: 'Frontend Developer',
        period: '2022.03 – Present',
        desc: 'Led frontend architecture for core digital systems (CRM, EHS, Logistics). Built internal CLI scaffolding and Monorepo architecture, boosted team efficiency by 30%+. Designed a JSON-Schema-driven dynamic form engine that cut new page dev time from days to hours.',
        tags: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Unocss', 'Node.js'],
      },
      {
        company: 'Sangfor Technologies Inc.',
        role: 'Frontend Developer',
        period: '2021.03 – 2022.03',
        desc: 'Core contributor to a big-data analytics platform. Led a DOM-to-Canvas rendering refactor that enabled million-row data rendering at 60fps. Reduced first-screen load from 60s to 3s (20× improvement), winning a department-level innovation award.',
        tags: ['Vue 2', 'Webpack', 'ECharts', 'Canvas', 'Vuex'],
      },
    ],
  },
  projects: {
    subtitle: "Things I've built",
    title: 'Selected',
    highlight: 'Projects',
    featured: 'Featured',
    live: 'Live Demo',
    source: 'Source',
  },
  contact: {
    subtitle: "Let's talk",
    title: 'Get In',
    highlight: 'Touch',
    desc: 'Open to new opportunities, collaborations, or just a friendly chat about tech.',
    cta_title: 'Ready to work together?',
    cta_desc: "Whether it's a new role, a freelance project, or just want to say hi — my inbox is always open.",
    cta_btn: 'Send a Message',
    footer: 'Built with React + TypeScript + Tailwind CSS',
  },
}

export type Locale = typeof en
