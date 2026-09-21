import { Divider } from '@/components/common';
import { Github, Mail } from 'lucide-react';
import type { ReactNode } from 'react';

export function Footer() {
  return (
    <footer className="pt-0 pb-6 px-0 font-mono font-thin text-xs tracking-widest w-full">
      <Divider label="coffee??" />

      <p className="mt-4 max-w-full text-left font-thin text-white">
        always down to meet people building interesting things. ai, agent infra, open source, startups.
      </p>

      <div className="mt-4 flex items-center justify-between w-full">
        <p className="font-thin uppercase text-white">© 2026 malay</p>

        <div className="flex items-center gap-0">
          <SocialPill icon={<Github size={18} />} href="https://github.com/dev-malay" />
          <SocialPill icon={<XIcon />} href="https://x.com/max_codes" />
          <SocialPill icon={<Mail size={18} />} href="mailto:malayworkz@gmail.com" />
        </div>
      </div>
    </footer>
  );
}

function SocialPill({ icon, href }: { icon: ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-transparent text-zinc-300 hover:text-white w-10 h-10 rounded-none border-none transition-all font-normal"
    >
      {icon}
    </a>
  );
}

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
  </svg>
);
