import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '@/constants/data';

export function Header() {
  return (
    <motion.nav
      className="pt-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex justify-between sm:justify-end items-center gap-3 sm:gap-8 font-mono">
        {NAVIGATION_LINKS.map((link) => (
          <Link 
            key={link.href}
            to={link.href} 
            className="text-zinc-400 no-underline font-normal font-mono uppercase text-[9px] sm:text-[11px] tracking-wider sm:tracking-widest hover:text-white transition-colors whitespace-nowrap"
            style={{ textDecoration: 'none' }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
