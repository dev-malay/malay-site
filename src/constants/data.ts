export const NAVIGATION_LINKS = [
  { label: 'Experiences', href: '/#experience' },
  { label: 'Open Source', href: '/#open-source' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blogs', href: '/blogs' },
];

export const SOCIAL_LINKS = [
  { label: 'twitter/x', icon: 'https://img.icons8.com/ios-filled/50/000000/twitterx--v2.png', href: 'https://x.com/maxdev78' },
  { label: 'github', icon: 'https://img.icons8.com/ios-filled/50/000000/github.png', href: 'https://github.com/dev-malay' },
  { label: 'linkedIn', icon: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png', href: '#' },
  { label: 'mail', icon: 'https://img.icons8.com/ios-filled/50/000000/mail.png', href: 'mailto:malayworkz@gmail.com' },
];

export const EXPERIENCE_DATA = [
  {
    company: 'Prologiciel Consulting',
    role: 'Software Engineer',
    date: 'May 2026 - Present',
    sections: [
      {
        heading: 'Bol - Leidener digital book system',
        points: [
          'Built Journal Publisher backend APIs in C# with a TypeScript frontend for secure PDF publishing, Stripe payments, and encrypted .ldb downloads.',
          'Developed book-sampling algorithms across TXT, DOCX, ToC, HTML, and .ldb formats.',
          'Engineered .ldb distribution with auth codes, device binding, and access verification — books open only in BOL Browser.',
          'Contributed to the BOL Browser desktop app (C#, MySQL) with keyboard navigation, nested pages, and a 7-step InR workflow for device migration and book replacement.',
        ],
      },
      {
        heading: 'CELER - Health Care',
        points: [
          'Built route optimization with Google Maps integration; validated addresses across Florida hubs, lifting deliveries per shift by 20–30%.',
          'Fixed package idempotency in the driver app with barcode-based state management; deduplicated same-day multi-orders into single routes.',
          'Designed multi-tenant admin dashboard (Angular, TypeScript) for hubs, drivers, vehicles, routes, and billing with realtime asset tracking.',
        ],
      },
    ],
  },
  {
    company: 'Dione Apps',
    role: 'Backend Engineer',
    date: 'Dec 2025 - April 2026',
    sections: [
      {
        points: [
          'Built Instagram-like feed ranking on Qdrant Cloud embeddings with interaction-based scoring; optimized Node.js/Express backend with PostgreSQL and Redis.',
          'Engineered eShop feature turning social accounts into shops; product APIs on normalized schemas cutting query complexity by 40%.',
        ],
      },
    ],
  },
];

export const PROJECTS_DATA = [
  { 
    name: 'meridian', 
    tagline: 'reliable payment processing',
    desc: 'Payment processing pipeline with a transactional outbox for reliable queueing - BullMQ priority queues, idempotent APIs with retries, a 30s reconciliation job, Prometheus metrics, OpenTelemetry tracing, and a realtime React dashboard.',
    stack: 'TypeScript, Express, BullMQ, PostgreSQL, Redis, React, Prometheus, OpenTelemetry',
    link: 'https://meridian-jet-beta.vercel.app/',
    github: 'https://github.com/dev-malay/meridian',
    img: '/postmind.png',
    status: 'Live'
  },
  { 
    name: 'octane', 
    tagline: 'perpetuals trading terminal',
    desc: 'Perpetuals trading platform with an in-memory matching engine - limit/market orders, margin and liquidation engine, Binance-fed index prices over WebSockets, Redis Streams, Postgres persistence, and a realtime Hyperliquid-style trading.',
    stack: 'Bun, TypeScript, Express, Redis Streams, PostgreSQL, Prisma, React, WebSockets, Turborepo',
    link: 'https://octane-frontend-h2vz.vercel.app/',
    github: 'https://github.com/dev-malay/octane',
    img: '/horizon.png',
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
    slug: 'working-on-it',
    title: 'working on it',
    date: 'coming soon',
    content: ''
  },
];
