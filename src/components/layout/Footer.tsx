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
