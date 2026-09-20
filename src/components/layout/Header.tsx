import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATION_LINKS } from '@/constants/data';

const linkCls =
  'text-zinc-400 no-underline font-normal font-mono uppercase text-[9px] sm:text-[11px] tracking-wider sm:tracking-widest hover:text-white transition-colors whitespace-nowrap bg-transparent border-none cursor-pointer p-0';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    // keep the URL clean — no #hash left behind
    window.history.replaceState(null, '', location.pathname + location.search);
  };

  const handleSectionClick = (href: string) => {
    const id = href.split('#')[1];
    if (!id) return;
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToId(id), 100);
    } else {
      scrollToId(id);
    }
  };

  return (
    <motion.nav
      className="pt-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex justify-between sm:justify-end items-center gap-3 sm:gap-8 font-mono">
        {NAVIGATION_LINKS.map((link) =>
          link.href.includes('#') ? (
            <button
              key={link.href}
              onClick={() => handleSectionClick(link.href)}
              className={linkCls}
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.href}
              to={link.href}
              className={linkCls}
              style={{ textDecoration: 'none' }}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </motion.nav>
  );
}
