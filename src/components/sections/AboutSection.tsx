import { Mail, Eye, Sun, Moon, Github } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useTheme } from '@/context/ThemeContext';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, cloneElement, ReactNode, ReactElement } from 'react';

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const STATUS_PHRASES = [
  "SOFTWARE DEVELOPER",
  "INDIE HACKER",
  "OPEN FOR SIDE QUESTS",
  "HUNTING GIGS",
  "OPEN FOR FREELANCING"
];

export function AboutSection() {
  const { isLight, toggleTheme } = useTheme();
  const [visitorCount, setVisitorCount] = useState<string>('…');
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatusIndex((prev) => (prev + 1) % STATUS_PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const alreadyCounted = sessionStorage.getItem('v_counted');
        const endpoint = alreadyCounted
          ? 'https://api.counterapi.dev/v1/malay-portfolio-2026-v1/vc'
          : 'https://api.counterapi.dev/v1/malay-portfolio-2026-v1/vc/up';

        const res = await fetch(endpoint, { cache: 'no-cache' });
        const data = await res.json();

        if (!alreadyCounted) {
          sessionStorage.setItem('v_counted', 'true');
        }

        const count: number = data.count ?? 0;
        setVisitorCount(count >= 1000 ? (count / 1000).toFixed(1) + 'k' : String(count));
      } catch (err) {
        console.error('Visitor count error:', err);
        setVisitorCount('—');
      }
    };
    fetchCount();
  }, []);

  const githubTheme = isLight
    ? {
        light: ['#e8e8e8', '#b6e5c8', '#6cc68c', '#37a75c', '#1a7a3c'],
        dark:  ['#e8e8e8', '#b6e5c8', '#6cc68c', '#37a75c', '#1a7a3c'],
      }
    : {
        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark:  ['#09090b', '#18181b', '#27272a', '#3f3f46', '#52525b'],
      };

  return (
    <motion.section id="about" className="py-2 space-y-8" variants={itemVariants}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="relative shrink-0">
          <img
            src="/max4.jpg"
            alt="maxcodes"
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl object-cover border border-zinc-900"
          />
        </div>
        
        <div className="flex-1 min-w-0 pt-1 sm:pt-3 flex flex-col justify-center">
          <h1 className="text-[15px] sm:text-xl font-thin tracking-tight text-white group flex items-center gap-1.5 sm:gap-2 whitespace-nowrap mb-0.5 sm:mb-1">
            malay aka <span className="transition-transform duration-300 group-hover:translate-x-1">→</span> <a href="https://x.com/maxdev78" target="_blank" rel="noopener noreferrer" className="text-white no-underline hover:no-underline">max</a>
          </h1>

          <div className="flex items-center justify-between gap-2">
            <div className="h-5 overflow-hidden flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStatusIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-zinc-500 text-[10px] sm:text-sm font-normal whitespace-nowrap truncate"
                >
                  {STATUS_PHRASES[currentStatusIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <div className="flex items-center gap-3 shrink-0 pb-1">
              <div className="flex items-center gap-1.5 text-zinc-500">
                <Eye size={12} className="sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs font-normal">{visitorCount}</span>
              </div>
              <button
                onClick={toggleTheme}
                title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                className="text-zinc-500 hover:text-white transition-colors flex items-center"
              >
                {isLight ? <Moon size={12} className="sm:w-4 sm:h-4" /> : <Sun size={12} className="sm:w-4 sm:h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="space-y-4 max-w-[650px]">
        <p className="text-zinc-400 text-sm leading-relaxed font-thin">
         Product-driven Engineer who ships fast and cares deeply about craft. I turn ideas into polished products and focus on the details that make software alive. <span className="text-white font-thin italic">I don't get lucky. I make my own luck.</span>
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed font-thin">
          I’ve worked across multi agent systems, RAGs, full-stack platforms, and web apps. Mostly using Next.js, TypeScript, and whatever gets the job done.
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed font-thin">
          <span className="text-white font-thin">5x</span> Hackathons. <span className="text-white font-thin"></span>  <span className="text-white font-thin">2x</span> Startup SWE. 
         
        </p>
       
        <p className="text-zinc-400 text-sm leading-relaxed font-thin">
          <span className="text-white font-thin">Open to Work</span> ~ Full-Time, Freelance, or Collaborations. DM on X
        </p>
      </div>

    
      <div className="space-y-3">
        <p className="text-zinc-500 text-sm font-normal">
          <span className="text-white font-thin underline decoration-zinc-700 underline-offset-4">→ socials</span>
        </p>
        <div className="flex flex-wrap gap-2">
          <SocialPill icon={<Github size={18} />} href="https://github.com/dev-malay" />
          <SocialPill icon={<XIcon />} href="https://x.com/maxdev78" />
          <SocialPill icon={<Mail size={18} />} href="mailto:malayworkz@gmail.com" />
         
        </div>
      </div>

     
      <div className="pb-4">
        <div className="overflow-x-auto no-scrollbar font-thin">
          <GitHubCalendar
            username="dev-malay"
            theme={githubTheme}
            fontSize={12}
            blockSize={11}
            blockMargin={4}
            // hideColorLegend={false}
            // hideTotalCount={false}
            labels={{
              totalCount: '{{count}} activities in {{year}}',
            }}
            blockRadius={0}
            transformData={(data) => {
              const seen = new Set();
              return data.filter(item => {
                if (seen.has(item.date)) return false;
                seen.add(item.date);
                return true;
              }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            }}
            renderBlock={(block, activity) => (
              cloneElement(block as ReactElement, {
                'data-tooltip-id': 'github-tooltip',
                'data-tooltip-content': `${activity.count} contributions on ${activity.date}`,
              })
            )}
          />
          <ReactTooltip id="github-tooltip" place="top" />
        </div>
      </div>
    </motion.section>
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
