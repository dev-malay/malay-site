import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS_DATA } from '@/constants/data';

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface ProjectItemProps {
  name: string;
  tagline?: string;
  desc: string;
  stack?: string;
  link?: string;
  github?: string;
}

function formatTags(stack?: string) {
  if (!stack) return '';
  return stack
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
    .join(' · ');
}

function ProjectItem({ name, tagline, desc, stack, link, github }: ProjectItemProps) {
  const tags = formatTags(stack);

  return (
    <div className="border-b border-zinc-800/60 py-2 transition-colors hover:border-zinc-700">
      <div className="flex items-baseline gap-4">
        <span className="font-sans text-[15px] font-medium tracking-tight text-zinc-100">
          {name}
          {tagline && (
            <>
              <span className="font-mono font-normal text-white"> → </span>
              <span className="font-mono text-sm font-normal text-zinc-400">{tagline}</span>
            </>
          )}
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-3">
          <a
            href={link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            style={{ textDecoration: 'none' }}
            title="View Project"
          >
            <ArrowUpRight size={16} />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-white"
              style={{ textDecoration: 'none' }}
              title="GitHub"
            >
              <Github size={16} />
            </a>
          )}
        </span>
      </div>
      {tags && (
        <span className="mt-1 block break-words font-mono text-[11px] text-zinc-500">{tags}</span>
      )}
      <span className="mt-1 block font-mono text-[13px] font-thin leading-relaxed text-zinc-400">{desc}</span>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <motion.section id="projects" className="pb-2 pt-4" variants={itemVariants}>
      <div>
        {PROJECTS_DATA.map((proj, idx) => (
          <ProjectItem key={idx} {...proj} />
        ))}
      </div>

      <div className="mt-2 flex justify-start">
        <a
          href="https://github.com/dev-malay"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-100"
          style={{ textDecoration: 'none' }}
        >
          view all on github →
        </a>
      </div>
    </motion.section>
  );
}
