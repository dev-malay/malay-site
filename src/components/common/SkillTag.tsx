import { motion } from 'framer-motion';

interface SkillTagProps {
  label: string;
  icon?: string;
}

export function SkillTag({ label, icon }: SkillTagProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(24, 24, 27, 0.7)' }}
      className="border border-zinc-700 px-3.5 py-1.5 flex items-center gap-2 text-xs font-normal cursor-default hover:border-white transition-colors"
    >
      {icon ? (
        <img
          src={icon}
          alt={label}
          className="w-4 h-4"
          style={{
            filter: icon.includes('ios-filled') || icon.includes('color') ? 'none' : 'invert(1)',
          }}
        />
      ) : (
        <span className="text-xs font-normal border border-zinc-600 px-1 py-0.5 leading-none">
          {label.substring(0, 2).toUpperCase()}
        </span>
      )}
      {label}
    </motion.div>
  );
}
