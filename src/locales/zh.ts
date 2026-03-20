import type { Locale } from './en'

export const zh: Locale = {
  nav: {
    about: '关于',
    skills: '技能',
    experience: '经历',
    projects: '项目',
    contact: '联系',
    hire: '雇用我',
  },
  hero: {
    badge: '正在寻找新机会',
    greeting: '你好，我是',
    name: '刘爽',
    role: '前端开发工程师',
    desc: '5 年 B 端复杂系统开发经验，专注于 Vue 3 生态、前端工程化、性能优化与数据可视化。',
    cta_work: '查看我的作品',
    cta_contact: '联系我',
    tech_label: '核心技术栈：',
  },
  skills: {
    subtitle: '我的技术栈',
    title: '技能 &',
    highlight: '技术',
    categories: {
      frontend: '前端',
      tooling: '工具链',
      backend: '后端 & 其他',
      ai: 'AI 工具',
    },
  },
  experience: {
    subtitle: '我工作过的地方',
    title: '工作',
    highlight: '经历',
    present: '至今',
    jobs: [
      {
        company: '合盛硅业股份有限公司',
        role: '前端开发工程师',
        period: '2022.03 – 至今',
        desc: '主导集团核心数字化系统（CRM营销平台、安环管理平台、物流系统）的前端架构搭建。建设内部 CLI 脚手架与 Monorepo 架构，团队整体开发效率提升 30%+。设计基于 JSON-Schema 的动态表单引擎，新页面开发从数天缩短至数小时。',
        tags: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Unocss', 'Node.js'],
      },
      {
        company: '深信服科技股份有限公司',
        role: '前端开发工程师',
        period: '2021.03 – 2022.03',
        desc: '核心参与大数据智能管理平台开发。主导 DOM 渲染向 Canvas 渲染的技术重构，实现百万级数据 60fps 流畅滚动。将首屏加载时间从 60s 降至 3s（提升 20 倍），荣获部门级创新二等奖。',
        tags: ['Vue 2', 'Webpack', 'ECharts', 'Canvas', 'Vuex'],
      },
    ],
  },
  projects: {
    subtitle: '我做过的东西',
    title: '精选',
    highlight: '项目',
    featured: '精选',
    live: '在线预览',
    source: '源码',
  },
  contact: {
    subtitle: '来聊聊',
    title: '联系',
    highlight: '我',
    desc: '欢迎新机会、合作项目，或者只是聊聊技术。',
    cta_title: '准备好合作了吗？',
    cta_desc: '无论是新岗位、自由职业，还是只想打个招呼——我的邮箱随时开放。',
    cta_btn: '发送消息',
    footer: '使用 React + TypeScript + Tailwind CSS 构建',
  },
}
