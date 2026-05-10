export const NAVIGATION_LINKS = [
  { label: 'Experiences', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Blogs', href: '/blogs' },
];

export const SOCIAL_LINKS = [
  { label: 'twitter/x', icon: 'https://img.icons8.com/ios-filled/50/000000/twitterx--v2.png', href: '#' },
  { label: 'github', icon: 'https://img.icons8.com/ios-filled/50/000000/github.png', href: '#' },
  { label: 'linkedIn', icon: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png', href: '#' },
  { label: 'mail', icon: 'https://img.icons8.com/ios-filled/50/000000/mail.png', href: '#' },
];

export const EXPERIENCE_DATA = [
  {
    company: 'Dione Apps',
    role: 'Backend Engineer',
    date: 'Dec 2025 - April 2026',
    stack: 'RAG, Python, NodeJS, ExpressJS, MongoDB, Qdrant Cloud, React, VectorEmbedding',
    desc: 'Contributed to building a robust backend infrastructure to support the shop feature’s product management, ensuring efficient data retrieval and structured JSON responses for the frontend, while also improving data integrity and performance by designing normalized database schemas for the marketplace and reducing query complexity for product filtering and search',
    
  },
  {
    company: 'ProLogiciel Consulting',
    role: 'Software Engineer',
    date: 'May 2026 - Present',
    stack: 'TypeScript, Angular, C#, SQL',
    desc: 'I’m currently working on the Cellera project, a banking software platform built with multiple interconnected services, where I contribute to developing and maintaining scalable backend systems, ensuring secure transactions, and improving the overall reliability and performance of financial operations across the platform',
  },
];

export const PROJECTS_DATA = [
  { 
    name: 'Postmind', 
    desc: 'Built a semantic vector search system using Sentence Transformers and Qdrant with RAG pipeline for personalized content suggestions.',
    stack: 'RAG, Python, NodeJS, MongoDB, QdrantCloud, GroqAI',
    link: '',
    github: '',
    img: '/src/components/public/image.png',
    status: 'Live'
  },
  { 
    name: 'Horizon', 
    desc: 'Real-time collaborative whiteboard with WebSockets, Redis caching, and sub-second latency for synchronized drawing.',
    stack: 'NodeJS, ExpressJS, Redis, MongoDB, ReactJS',
    link: '',
    github: '',
    img: '/src/components/public/image copy.png',
    status: 'Live'
  },
];

export const PROJECT_CATEGORIES = ['All projects', 'Web projects', 'AI projects', 'Fun projects'];

export const SKILLS_DATA = [
  { label: 'JavaScript' },
  { label: 'TypeScript' },
  { label: 'Python' },
  { label: 'C' },
  { label: 'MongoDB' },
  { label: 'HTML' },
  { label: 'Java' },
  { label: 'Nodejs' },
  { label: 'React' },
  { label: 'NextJs' },
  { label: 'Tailwind' },
  { label: 'Express' },
  { label: 'Postgres' },
  { label: 'Git' },
  { label: 'Docker' },
  { label: 'MySQL' },
  { label: 'Redis' },
  { label: 'Figma' },
  { label: 'AWS' },
  { label: 'OpenAI' },
];

export const BLOGS_DATA = [
  { 
    id: '1',
    slug: 'context-rot',
    title: 'AI ~ By maxdev', 
    date: 'coming soon',
    content: ''
  },
  { 
    id: '2',
    slug: '$ perpetual perspective  ',
    title: 'perpetual perspective ~ $', 
    date: 'coming soon',
    content: ''
  },
  { 
    id: '3',
    slug: 'rag-architecture',
    title: 'CRAGS', 
    date: 'coming soon',
    content: ''
  },
];
