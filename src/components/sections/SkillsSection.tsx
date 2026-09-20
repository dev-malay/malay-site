import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


const SKILL_ICONS: { label: string; slug: string }[] = [
  { label: 'JavaScript', slug: 'javascript' },
  { label: 'TypeScript', slug: 'typescript' },
  { label: 'Python', slug: 'python' },
  { label: 'MongoDB', slug: 'mongodb' },
  { label: 'Node.js', slug: 'nodedotjs' },
  { label: 'React', slug: 'react' },
  { label: 'Next.js', slug: 'nextdotjs' },
  { label: 'Tailwind CSS', slug: 'tailwindcss' },
  { label: 'Express', slug: 'express' },
  { label: 'PostgreSQL', slug: 'postgresql' },
  { label: 'Git', slug: 'git' },
  { label: 'Docker', slug: 'docker' },
  { label: 'Redis', slug: 'redis' },
  { label: 'Prisma', slug: 'prisma' },
  { label: 'Postman', slug: 'postman' },
  { label: 'GitHub', slug: 'github' },
  { label: 'MySQL', slug: 'mysql' },
];

export function SkillsSection() {
  const { isLight } = useTheme();

  // Monochrome silhouette matching the theme (white on black, black on light);
  // hovering any icon reveals its original brand color.
  const monoCls = isLight ? 'brightness-0' : 'brightness-0 invert';
  const hoverCls = isLight
    ? 'group-hover:brightness-100'
    : 'group-hover:brightness-100 group-hover:invert-0';

  return (
    <motion.section id="skills" className="pt-6 pb-0" variants={itemVariants}>
      <div className="flex flex-wrap gap-5 items-center">
        {SKILL_ICONS.map(({ label, slug }) => {
          return (
            <div key={slug} className="group relative w-7 h-7">
              <img
                src={`https://cdn.simpleicons.org/${slug}`}
                alt={label}
                loading="lazy"
                className={`w-full h-full object-contain transition-all duration-200 ${monoCls} ${hoverCls}`}
              />
              <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] px-2 py-0.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
