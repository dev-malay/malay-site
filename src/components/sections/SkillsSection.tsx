import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Simple Icons slugs — raw logos, no background, official brand colors
// color override (hex without #) forces a specific fill — needed for dark logos on dark bg
const SKILL_ICONS: { label: string; slug: string; needsColorFlip?: boolean }[] = [
  { label: 'JavaScript', slug: 'javascript' },
  { label: 'TypeScript', slug: 'typescript' },
  { label: 'Python', slug: 'python' },
  { label: 'MongoDB', slug: 'mongodb' },
  { label: 'Node.js', slug: 'nodedotjs' },
  { label: 'React', slug: 'react' },
  { label: 'Next.js', slug: 'nextdotjs', needsColorFlip: true },
  { label: 'Tailwind CSS', slug: 'tailwindcss' },
  { label: 'Express', slug: 'express', needsColorFlip: true },
  { label: 'PostgreSQL', slug: 'postgresql' },
  { label: 'Git', slug: 'git' },
  { label: 'Docker', slug: 'docker' },
  { label: 'Redis', slug: 'redis' },
  { label: 'Prisma', slug: 'prisma', needsColorFlip: true },
  { label: 'Postman', slug: 'postman' },
  { label: 'GitHub', slug: 'github', needsColorFlip: true },
  { label: 'MySQL', slug: 'mysql' },
];

export function SkillsSection() {
  const { isLight } = useTheme();

  return (
    <motion.section id="skills" className="pt-6 pb-0" variants={itemVariants}>
      <div className="flex flex-wrap gap-5 items-center">
        {SKILL_ICONS.map(({ label, slug, needsColorFlip }) => {
          // If the icon needs a color flip (e.g., Next.js), use black in light mode and white in dark mode.
          const iconColor = needsColorFlip ? (isLight ? '000000' : 'ffffff') : null;

          return (
            <div key={slug} className="group relative w-7 h-7">
              <img
                src={`https://cdn.simpleicons.org/${slug}${iconColor ? `/${iconColor}` : ''}`}
                alt={label}
                className="w-full h-full object-contain"
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
