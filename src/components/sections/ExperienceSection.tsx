import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionTitle } from '@/components/common';
import { EXPERIENCE_DATA } from '@/constants/data';

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface ExperienceItemProps {
  company: string;
  role: string;
  date: string;
  stack?: string;
  desc?: string;
}

function ExperienceItem({ company, role, date, stack, desc }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6 border-b border-zinc-900 pb-6 last:border-0 last:pb-0 last:mb-0">
      <div
        className="flex justify-between items-start cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
            <div className="flex items-center gap-1.5">
              <div className="relative inline-block group/blur overflow-hidden rounded-sm">
                <h3 className="text-white font-thin text-base">
                  {company.split(' ')[0]}
                </h3>

                <div 
                  className="absolute inset-0 backdrop-blur-[12px] select-none pointer-events-none"
                  style={{ 
                    backgroundColor: 'rgba(9, 9, 11, 0.4)' 
                  }}
                />
              </div>
              {company.split(' ').length > 1 && (
                <h3 className="text-white font-thin text-base opacity-90">
                  {company.split(' ').slice(1).join(' ')}
                </h3>
              )}
            </div>
            <span className="text-zinc-300 text-sm font-thin">{date}</span>
          </div>
          <p className="text-zinc-400 text-sm font-thin">{role}</p>
        </div>
        <div className="ml-4 pt-1">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-zinc-500 group-hover:text-white transition-colors"
          >
            <ChevronDown size={20} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-3">
              {stack && (
                <div className="space-y-1">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-normal">Tech Stack</p>
                  <p className="text-zinc-300 text-sm font-thin leading-relaxed">{stack}</p>
                </div>
              )}
              {desc && (
                <div className="space-y-1">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-normal">Description</p>
                  <p className="text-zinc-300 text-sm font-thin leading-relaxed">{desc}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <motion.section id="experience" className="py-10" variants={itemVariants}>
      <div className="">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </motion.section>
  );
}
