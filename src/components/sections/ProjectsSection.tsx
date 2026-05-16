import { motion } from 'framer-motion';
import { Pin, ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS_DATA } from '@/constants/data';

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface ProjectItemProps {
  name: string;
  desc: string;
  stack?: string;
  img?: string;
  link?: string;
  github?: string;
  status?: string;
}

function ProjectItem({ name, desc, img, link, github, status }: ProjectItemProps) {
  const isLive = status === 'Live';

  return (
    <div className="flex flex-col space-y-4">

      <div className="relative aspect-[1.4/1] w-full bg-zinc-950/20 p-4 group">

        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-normal">{name}</span>
          <Pin size={12} className="text-zinc-600 rotate-45 group-hover:text-zinc-400 transition-colors" />
        </div>


        <div className="relative h-[calc(100%-2rem)] w-full overflow-hidden bg-zinc-900/40">
          {img ? (
            <img
              src={img}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-800 text-[10px] uppercase tracking-widest font-thin">
              Preview
            </div>
          )}
        </div>
      </div>


      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-normal text-base tracking-tight">{name}</h3>
          <div className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]'}`} />
            <span className="text-[11px] text-zinc-400 font-normal">{status}</span>
          </div>
        </div>

        <p className="text-zinc-400 text-sm font-thin leading-relaxed">
          {desc}
        </p>

        <div className="flex items-center gap-4 pt-1">
          <a
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-xs font-normal group/link"
          >
            View Project
            <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <motion.section id="projects" className="py-12" variants={itemVariants}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {PROJECTS_DATA.map((proj, idx) => (
          <ProjectItem key={idx} {...proj} />
        ))}
      </div>


      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/dev-malay"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-zinc-400 hover:text-white text-xs font-normal transition-colors duration-200 border border-zinc-800 hover:border-zinc-600 px-4 py-2"
          style={{ textDecoration: 'none' }}
        >
          View More
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>
      </div>
    </motion.section>
  );
}
