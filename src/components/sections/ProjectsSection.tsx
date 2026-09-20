import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Github } from 'lucide-react';
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
  img?: string;
  link?: string;
  github?: string;
  status?: string;
}

function formatTags(stack?: string) {
  if (!stack) return '';
  return stack
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
    .join(' · ');
}

function ProjectItem({ name, tagline, desc, stack, img, link, github, status }: ProjectItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLive = status === 'Live';
  const tags = formatTags(stack);

  return (
    <div className="border-b border-zinc-800/60 transition-colors hover:border-zinc-700">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="group block cursor-pointer py-2"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-sans text-[15px] font-medium tracking-tight text-zinc-100 transition-colors group-hover:text-white">
            {name}
            {tagline && (
              <>
                <span className="font-mono font-normal text-white"> → </span>
                <span className="font-mono text-sm font-normal text-zinc-400">{tagline}</span>
              </>
            )}
          </span>
          <span className="ml-auto flex shrink-0 items-center">
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-zinc-500 transition-colors group-hover:text-white"
            >
              <ChevronDown size={16} strokeWidth={1.5} />
            </motion.span>
          </span>
        </div>
        {tags && (
          <span className="mt-1 block break-words font-mono text-[11px] text-zinc-500">{tags}</span>
        )}
        <span className="mt-1 block font-sans text-[13px] font-thin leading-relaxed text-zinc-500">{desc}</span>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pb-4 pt-1">
              {img && (
                <div className="w-full overflow-hidden border border-zinc-800/60 bg-zinc-900/40">
                  <img
                    src={img}
                    alt={name}
                    className="aspect-[2/1] w-full object-cover"
                  />
                </div>
              )}

              {stack && (
                <p className="font-mono text-xs text-zinc-500">{stack}</p>
              )}

              <div className="flex items-center gap-4">
                {status && (
                  <span className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${isLive ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]'}`} />
                    <span className="text-[11px] font-normal text-zinc-400">{status}</span>
                  </span>
                )}
                <a
                  href={link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-1 text-xs font-normal text-zinc-400 transition-colors hover:text-white"
                  style={{ textDecoration: 'none' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                  <ArrowUpRight size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition-colors hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <motion.section id="projects" className="py-6" variants={itemVariants}>
      <div>
        {PROJECTS_DATA.map((proj, idx) => (
          <ProjectItem key={idx} {...proj} />
        ))}
      </div>


      <div className="mt-6 flex justify-start">
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
